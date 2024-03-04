import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Expense } from 'src/entity/expense.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StatisticsService {
    constructor(
        @InjectRepository(Expense) private expenseRepository: Repository<Expense>,
        private jwtService: JwtService,
    ) { }
    async getStatistics(userid: number): Promise<any> {
        try {

            const expenses = await this.expenseRepository.find({
                where: { customerid: userid }
            });

            const groupExpenses = (type: string) =>
                expenses
                    .filter((expense) => expense.type === type)
                    .reduce(
                        (acc, expense) => {
                            acc[expense.category] =
                                (acc[expense.category] || 0) +
                                parseFloat(expense.amount.toString());
                            return acc;
                        },
                        {} as { [key: string]: number },
                    );

            const totalExpenses = Object.values(groupExpenses('expense')).reduce(
                (sum, amount) => sum + amount,
                0,
            );
            const totalIncome = Object.values(groupExpenses('income')).reduce(
                (sum, amount) => sum + amount,
                0,
            );
            const balance = totalIncome - totalExpenses;

            return {
                totalExpenses,
                totalIncome,
                balance,
                expensesByCategory: groupExpenses('expense'),
                incomeByCategory: groupExpenses('income')
            };
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}
