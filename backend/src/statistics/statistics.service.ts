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
  ) {}
  async getStatistics(customerId: number): Promise<any> {
    try {
      const query = `
                SELECT
                    totalExpenses,
                    totalIncome,
                    totalIncome - totalExpenses AS balance,
                    JSON_OBJECTAGG(category_expense, total_expense) FILTER (WHERE category_expense IS NOT NULL) AS expensesByCategory,
                    JSON_OBJECTAGG(category_income, total_income) FILTER (WHERE category_income IS NOT NULL) AS incomeByCategory
                FROM (
                    SELECT
                        SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END) AS totalExpenses,
                        SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END) AS totalIncome,
                        CASE WHEN type = 'expense' THEN category END AS category_expense,
                        CASE WHEN type = 'income' THEN category END AS category_income
                    FROM expense
                    WHERE customerid = $1
                    GROUP BY type, category
                ) AS TotalExpensesIncome;
            `;

      /*     const result = await this.expenseRepository.query(query, [customerId]); */

      return {
        totalExpenses: 50,
        totalIncome: 100,
        balance: 50,
        expensesByCategory: [{ food: '421' }, { salary: '412421' }],
        incomeByCategory: [{ food: '421' }, { salary: '412421' }],
        /* totalExpenses: result[0].totalExpenses,
        totalIncome: result[0].totalIncome,
        balance: result[0].balance,
        expensesByCategory: result[0].expensesByCategory,
        incomeByCategory: result[0].incomeByCategory, */
      };
    } catch (error) {
      console.error('Error fetching statistics:', error);
      throw error;
    }
  }
}
