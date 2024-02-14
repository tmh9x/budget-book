import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentService } from './payment/payment.service';
import { PaymentController } from './payment/payment.controller';
import { AuthModule } from './auth/auth.module';
import { GoogleStrategy } from './auth/auth-utils/Google.strategy';

@Module({
  imports: [AuthModule],
  controllers: [AppController, PaymentController],
  providers: [AppService, PaymentService, GoogleStrategy],
})
export class AppModule {}
