import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ExpenseService } from '../../services/expense-service.service';
import { HeaderComponent } from '../../components/header/header.component';
import { Observable } from 'rxjs';
import { PieChartComponent } from '../../components/piechart/piechart.component';
import { StatisticsListComponent } from '../../components/statistics-list/statistics-list.component';
import { TokenstorageService } from '../../services/tokenstorage.service';

@Component({
  standalone: true,
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
  imports: [HeaderComponent, PieChartComponent, StatisticsListComponent],
})
export class StatisticsComponent {
  jwtToken: string | null = '';
  /* expensesList: any[] = []; */
  pieChartData: any = {};

  constructor(
    private http: HttpClient,
    private tokenstorageService: TokenstorageService,
    private expenseService: ExpenseService
  ) {}
}
