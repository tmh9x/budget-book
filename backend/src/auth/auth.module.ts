import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';


@Module({
    controllers :[AuthController],
    providers: [AuthService],
})
export class AuthModule {}
