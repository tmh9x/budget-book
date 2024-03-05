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
  statisticsList: any[] = [];

  constructor(private statisticsServce: StatisticsService) {}

  ngOnInit(): void {
    this.statisticsServce.getStatistics().subscribe((statistics) => {
      this.statisticsList = statistics;
      this.prepareChartData();
    });
  }

  prepareChartData(): void {
    const labels = this.statisticsList.map((statistics) => statistics.category);
    const data = this.statisticsList.map((statistics) => statistics.amount);
    this.pieChartData.data.labels = labels;
    this.pieChartData.data.datasets[0].data = data;
  }
}
