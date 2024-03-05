import { Component, Input, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
<<<<<<< HEAD
=======
import { ExpenseService } from '../../services/expense-service.service';
>>>>>>> origin/main
import { StatisticsService } from '../../services/statistics.service';

@Component({
  standalone: true,
  selector: 'app-statistics-list',
  templateUrl: './statistics-list.component.html',
  styleUrls: ['./statistics-list.component.css'],
  imports: [CommonModule],
})
export class StatisticsListComponent implements OnInit {
  pieChartData: any = {};
  @Input() chartData: any = {};
  expensesList: any[] = [];

<<<<<<< HEAD
  constructor(private statisticsService: StatisticsService) {}

  ngOnInit(): void {
    this.statisticsService.getStatistics().subscribe((expenses) => {
=======
  constructor(private statisticsServce: StatisticsService) {}

  ngOnInit(): void {
    this.statisticsServce.getStatistics().subscribe((expenses) => {
>>>>>>> origin/main
      this.expensesList = expenses;
      console.log('expensesList hier', this.expensesList);
      this.prepareChartData();
    });
  }

  prepareChartData(): void {
    const labels = this.expensesList.map((expense) => expense.category);
    const data = this.expensesList.map((expense) => expense.amount);
    this.pieChartData.data.labels = labels;
    this.pieChartData.data.datasets[0].data = data;
  }
}
