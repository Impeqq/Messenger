import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { ILike, Repository } from 'typeorm';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import { SignInInput, SignUpInput } from './dto/auth.inputs';
import { FileService } from 'src/file/file.service';
import { FileUpload } from 'graphql-upload';

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
      },
      'secret',
    );
  }

  async findByName(name: string) {
    if (!name) return [];
    return await this.userRepo.find({
      relations: ['avatar'],
      where: [
        { firstName: ILike(`%${name}%`) },
        { lastName: ILike(`%${name}%`) },
      ],
    });
  }

  async findOne(id: string) {
    return await this.userRepo.findOne({ id });
  }

  async createUser(user: SignUpInput, file: FileUpload) {
    const password = await bcrypt.hash(user.password, 10);

    const avatar = await this.fileService.uploadDatabaseFile(file);

    return this.userRepo
      .create({ ...user, password, avatar })
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

  async signIn({ email, password }: SignInInput) {
    const user = await this.userRepo.findOne({
      relations: ['avatar'],
      where: { email: email.toLowerCase() },
    });
    console.log(user);
    if (!user) return false;
    const isCorrectPassword = await bcrypt.compare(password, user.password);

    return isCorrectPassword ? user : false;
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
