import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // 👈 ESTA LÍNEA ES CLAVE
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}

