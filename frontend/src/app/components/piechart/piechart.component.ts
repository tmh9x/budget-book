import { Component, Input, OnInit } from '@angular/core';

import { Chart } from 'chart.js/auto';
import { ExpenseListComponent } from '../expense-list/expense-list.component';
import { StatisticsService } from '../../services/statistics.service';

@Component({
  standalone: true,
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css'],
})
export class PieChartComponent implements OnInit {
  @Input() statisticsData: any[] = [];
  @Input() chartData: any = {};
  @Input() expenses: ExpenseListComponent[] = [];
  statisticsList: any[] = [];

  constructor(private statisticsService: StatisticsService) {}

  ngOnInit(): void {
    this.statisticsService.getStatistics().subscribe((statistics) => {
      this.statisticsList = statistics;
      this.createPieChart();
    });
  }

  createPieChart() {
    const ctx = document.getElementById('pieChartExpense') as HTMLCanvasElement;
    const pieChartExpense = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: [
          'Groceries',
          'Transport',
          'Insurance',
          'Insurance',
          'Insurance',
        ],
        datasets: [
          {
            label: 'Example Dataset',
            data: [50, 40, 20, 30, 20],
            backgroundColor: ['black', 'darkgray', 'gray', 'black', 'darkgray'],
          },
        ],
      },
      options: {
        responsive: false,
        plugins: {
          legend: {
            display: false,
            labels: {
              color: 'white',
            },
          },
        },
      },
    });
  }
}
