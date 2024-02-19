import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentModule}  from './payment/payment.model'
import { CustomerModule } from './customer/customer.model';
require('dotenv').config()

@Module({
  imports: [
    PaymentModule,
    TypeOrmModule.forRoot({ 
      type: 'mysql',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT as unknown as number, 
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true, // wird auf false gesetzt, wenn wird das deployen werden
    }),
    AuthModule, CustomerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}