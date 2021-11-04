import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { ILike, Repository } from 'typeorm';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import { SignInInput, SignUpInput } from './dto/auth.inputs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
  ) {}

  createToken({ id, email, firstName, lastName }: UserEntity) {
    return jwt.sign({ id, email, firstName, lastName }, 'secret');
  }

  async findByName(name: string) {
    if (!name) return [];
    return await this.userRepo.find({
      where: [
        { firstName: ILike(`%${name}%`) },
        { lastName: ILike(`%${name}%`) },
      ],
    });
  }

  async findOne(id: string) {
    return await this.userRepo.findOne({ id });
  }

  async createUser(user: SignUpInput) {
    const password = await bcrypt.hash(user.password, 10);

    return this.userRepo
      .create({ ...user, password })
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
    const user = await this.userRepo.findOne({ email: email.toLowerCase() });
    if (!user) return false;
    const isCorrectPassword = await bcrypt.compare(password, user.password);

    return isCorrectPassword ? user : false;
  }

  async newUsers() {
    return await this.userRepo
      .createQueryBuilder('user')
      .orderBy('user.createdAt', 'DESC')
      .take(5)
      .getMany();
  }
}
