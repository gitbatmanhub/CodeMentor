import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Model } from 'mongoose';
import { ProfileUserDto } from '../auth/dto/profile-user.dto';
import {
  ProfileCompleteInterface,
  ProfileInterface,
} from './interfaces/profile.interface';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class ProfileService {
  constructor(
    @Inject('ProfileModel')
    private profileModel: Model<ProfileInterface>,
    private authService: AuthService,
  ) {}

  async createProfile(userId: string, data: ProfileUserDto) {
    const document = await this.profileModel.create({
      userId,
      ...data,
    });

    if (!document) {
      await this.authService.updateEncuestaStatus(userId, false);
      throw new NotFoundException('Error al crear el perfil');
    }

    await this.authService.updateEncuestaStatus(userId, true);

    return document;
  }

  async findAll(): Promise<ProfileInterface[]> {
    return await this.profileModel.find().exec();
  }

  async findOne(userId: string): Promise<ProfileCompleteInterface> {
    const profileUser = await this.profileModel.findOne({ userId }).lean(); // 🔥
    if (!profileUser) {
      throw new NotFoundException('Perfil no encontrado');
    }

    const user = await this.authService.getUserData(userId);

    const profileComplete: ProfileCompleteInterface = {
      ...profileUser,
      nombreCompleto: user.fullName,
      email: user.email,
    };

    return profileComplete;
  }

  async update(userId: string, data: ProfileUserDto) {
    return await this.profileModel.findOneAndUpdate(
      { userId },
      { $set: data },
      { new: true },
    );
  }

  async canUpdateProfile(userId: string, minMinutes = 60): Promise<boolean> {
    const user = await this.profileModel.findOne(
      { userId },
      { updatedAt: 1 }, // solo lo necesario
    );

    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    if (!user.updatedAt) {
      return true; // nunca actualizado
    }

    const now = Date.now();
    const lastUpdate = new Date(user.updatedAt).getTime();
    const diffMinutes = (now - lastUpdate) / (1000 * 60);

    return diffMinutes >= minMinutes;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
