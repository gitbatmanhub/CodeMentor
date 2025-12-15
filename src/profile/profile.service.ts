import { Inject, Injectable } from '@nestjs/common';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Model } from 'mongoose';
import { ProfileUserDto } from '../auth/dto/profile-user.dto';
import { ProfileInterface } from './interfaces/profile.interface';

@Injectable()
export class ProfileService {
  constructor(
    @Inject('ProfileModel')
    private profileModel: Model<ProfileInterface>,
  ) {}

  async createProfile(userId: string, data: ProfileUserDto) {
    return await this.profileModel.create({
      userId,
      ...data,
    });
  }

  async findAll(): Promise<ProfileInterface[]> {
    return await this.profileModel.find().exec();
  }

  findOne(id: string) {
    return this.profileModel.findOne({ userId: id }).exec();
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
