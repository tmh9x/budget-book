import { Controller, Get, Injectable, Req, UseGuards } from '@nestjs/common';
import { StatisticsService } from './statistics.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiBearerAuth()
@Controller('statistics')
@Injectable()
@UseGuards(AuthGuard)
export class StatisticsController {
  constructor(private statisticsService: StatisticsService) {}
  @Get('')
  getStatistics(@Req() req: any) {
    console.log('statistics');
    const userid = req.customer.sub;
    return this.statisticsService.getStatistics(userid);
  }
}
