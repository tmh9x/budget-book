import {
  Controller,
  ExecutionContext,
  Post,
  Get,
  Body,
  Res,
  HttpStatus,
  Delete,
  Put,
  Param,
  Injectable,
  Req,
} from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { Request } from 'express';

@Controller('expense')
@Injectable()
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  /*   @Post()
  create(@Body() body: any,@Req() req: Request) {
    return this.expenseService.create(body,req);
  } */

  @Get()
  findAll(@Req() req) {
    return this.expenseService.findAll(req);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.expenseService.findOne(+id);
  }

  @Put()
  update(@Req() req, @Body() body: any) {
    console.log('body.id', body.id);
    if (body.id) {
      return this.expenseService.update(body.id, body);
    } else {
      return this.expenseService.create(req, body);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.expenseService.remove(+id);
  }

  @Get('statistics')
  getStatistics(@Req() req: Request) {
    return this.expenseService.getStatistics(req);
  }
}
