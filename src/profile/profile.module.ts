import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { MongodbModule } from '../mongodb/mongodb.module';
import { ProfileProvider } from './profile.provider';
import { ProfileController } from './profile.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [ProfileController],
  imports: [MongodbModule, AuthModule],
  providers: [ProfileService, ...ProfileProvider],
  exports: [ProfileService, MongodbModule, ...ProfileProvider],
})
export class ProfileModule {}
