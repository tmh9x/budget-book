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
import { PaymentService } from './expense.service';
import { ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from 'src/auth/auth.guard';
import { Expense } from 'src/entity/expense.entity';

@ApiBearerAuth()
@Controller('expense')
@Injectable()
@UseGuards(AuthGuard)
export class PaymentController {
  constructor(
    private readonly paymentService: PaymentService,
    private jwtService: JwtService,
  ) {}

  @Get()
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
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentService.findOne(+id);
  }

  @Put()
  @ApiOperation({ summary: 'update or add expense' })
  @ApiBody({ 
    description: 'expense',
    type: Expense,
    // schema: {
    //   properties: {
    //     id: { type:'number', example: 15 }, 
    //     name: { type:'string', example: 'expense15' },
    //     amount: { type:'number', example: 100.00 },
    //     category: { type:'string', example: 'Others' },
    //   }
    // }
  })
  @ApiOkResponse({ 
    description: 'expense added/updated sucessfully',
    type: Expense,
  })
  update(@Req() req, @Body() body: any) {
    if (body.id) {
      return this.paymentService.update(body.id, body);
    } else {
      return this.paymentService.create(req, body);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentService.remove(+id);
  }
}
