import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { ExpenseModule } from './expense/expense.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatisticsModule } from './statistics/statistics.module';

require('dotenv').config();

@Module({
  imports: [
    ExpenseModule,
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
    AuthModule,
    StatisticsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
