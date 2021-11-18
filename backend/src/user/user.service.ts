import {
  BadRequestException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import { SignInInput, SignUpInput } from './dto/auth.inputs';
import { FileService } from 'src/file/file.service';
import { FileUpload } from 'graphql-upload';
import { UpdateInput, UpdatePasswordInput } from './dto/update.inputs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
    private readonly fileService: FileService,
  ) {}

  createToken({ id, email, firstName, lastName, avatar }: UserEntity) {
    return jwt.sign(
      {
        id,
        email,
        firstName,
        lastName,
        avatar: avatar ? { id: avatar.id } : null,
        online: true,
      },
      'secret',
    );
  }

  async findByName(name: string, id: string) {
    if (!name) return [];

    return await this.userRepo
      .createQueryBuilder('user')
      .innerJoinAndSelect('user.avatar', 'file')
      .where('user.firstName ILike :name', { name })
      .orWhere('user.lastName ILike :name', { name })
      .andWhere('user.id != :id', { id })
      .getMany();
  }

  async findOne(id: string) {
    return await this.userRepo.findOne({ id });
  }

  async createUser(user: SignUpInput) {
    const password = await bcrypt.hash(user.password, 10);

    return this.userRepo
      .create({ ...user, email: user.email.toLowerCase(), password })
      .save()
      .catch((e) => {
        if (/(email)[\s\S]+(already exists)/.test(e.detail)) {
          throw new BadRequestException(
            'Account with this email already exists.',
          );
        }
        return e;
      });
  }

  async updateUser(user_id: string, input: UpdateInput, file: FileUpload) {
    const avatar = file && (await this.fileService.uploadDatabaseFile(file));
    let oldUser;
    if (avatar) {
      oldUser = await this.userRepo.findOne(user_id, {
        relations: ['avatar'],
      });
    }

    await this.userRepo
      .createQueryBuilder('user')
      .update(UserEntity, avatar ? { ...input, avatar } : { ...input })
      .where('id = :id', { id: user_id })
      .execute();

    if (avatar) {
      await this.fileService.deleteDatabaseFile(oldUser.avatar.id);
    }

    const user = await this.userRepo.findOne(user_id, {
      relations: ['avatar'],
    });
    return await this.createToken(user);
  }

  async updatePassword(
    user_id: string,
    { password, newPassword, repeatedPassword }: UpdatePasswordInput,
  ) {
    const user = await this.userRepo.findOne({ id: user_id });
    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (!isCorrectPassword)
      throw new UnprocessableEntityException('Invalid current password 🤥');
    if (newPassword !== repeatedPassword)
      throw new UnprocessableEntityException(
        'Check if the input is correct 🤥',
      );

    await this.userRepo
      .createQueryBuilder('user')
      .update(UserEntity, { password: await bcrypt.hash(newPassword, 10) })
      .where('id = :id', { id: user_id })
      .execute();

    return true;
  }

  async setOnlineStatus(online: boolean, id: string) {
    await this.userRepo
      .createQueryBuilder('user')
      .update(UserEntity, { online })
      .where('id = :id', { id })
      .execute();
  }

  async signIn({ email, password }: SignInInput) {
    const user = await this.userRepo.findOne({
      relations: ['avatar'],
      where: { email: email.toLowerCase() },
    });
    if (!user) throw new UnprocessableEntityException('Invalid credentials 🤥');
    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (!isCorrectPassword)
      throw new UnprocessableEntityException('Invalid credentials 🤥');

    return this.createToken(user);
  }

  async newUsers() {
    return await this.userRepo
      .createQueryBuilder('user')
      .orderBy('user.createdAt', 'DESC')
      .leftJoinAndSelect('user.avatar', 'file')
      .take(5)
      .getMany();
  }
}
