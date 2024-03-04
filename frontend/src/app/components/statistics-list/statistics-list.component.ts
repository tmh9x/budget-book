import { Component, Input, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
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

  constructor(private statisticsService: StatisticsService) {}

  ngOnInit(): void {
    this.statisticsService.getStatistics().subscribe((expenses) => {
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
