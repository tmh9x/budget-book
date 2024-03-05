import {
  Controller,
  Get,
  Body,
  Delete,
  Put,
  Param,
  Injectable,
  Req,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiBearerAuth()
@Controller('expense')
@Injectable()
@UseGuards(AuthGuard)
export class ExpenseController {
  constructor(
    private readonly expenseService: ExpenseService,
    private jwtService: JwtService,
  ) {}

  @Get()
<<<<<<< HEAD
  findAll(@Req() req) {
    console.log('expense');
    return this.expenseService.findAll(req);
=======
  findAll(
    @Req() req: Request,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 7,
  ) {
    return this.paymentService.findAll(req, page, limit);
  }

  /*   @Get('all')
  async findAllElements(@Req() req: Request) {
    return await this.paymentService.findAllElements(req);
  } */

  @Get('all')
  findAllElements() {
    return this.paymentService.findAllElements();
>>>>>>> origin/main
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.expenseService.findOne(+id);
  }

  @Put()
  update(@Req() req, @Body() body: any) {
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
}
