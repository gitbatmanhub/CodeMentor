import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { Auth } from '../auth/decorators';
import { ProfileService } from './profile.service';
import { ProfileInterface } from './interfaces/profile.interface';

@Auth()
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  async getAllProfiles(): Promise<ProfileInterface[]> {
    return await this.profileService.findAll();
  }

  @Get('/:idUsuario')
  async getProfileByUserId(
    @Param('idUsuario', ParseUUIDPipe) idUsuario: string,
  ): Promise<ProfileInterface> {
    return await this.profileService.findOne(idUsuario);
  }
}
