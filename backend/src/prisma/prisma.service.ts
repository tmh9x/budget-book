import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    // constructor(config: ConfigService) {
        constructor(){
        super({
            datasources: {
            db: {
                // url: config.get('DATABASE_URL'),
                url: 'mysql://budgetuser:user2024@localhost:3306/mybudget', 
            },
            },
        });
    }
}
