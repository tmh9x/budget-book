import { Module } from '@nestjs/common';
import { StatisticsController } from './statistics.controller';
import { StatisticsService } from './statistics.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from 'src/entity/expense.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Expense])],
  controllers: [StatisticsController],
  providers: [StatisticsService]
})
export class StatisticsModule { }
