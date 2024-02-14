import { Module } from '@nestjs/common';
import { GoogleStrategy } from './Google.strategy';

@Module({
    providers: [GoogleStrategy]
})
export class AuthUtilsModule {}
