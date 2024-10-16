import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { SeriesOptionsType } from 'highcharts'; // Import du type

@Component({
  standalone: true,
  imports: [HighchartsChartModule],
  selector: 'app-sales-per-month',
  templateUrl: './sales-per-month.component.html',
  styleUrls: ['./sales-per-month.component.scss']
})
export class SalesPerMonthComponent implements OnInit {
  highcharts = Highcharts;
  chartOptions: Highcharts.Options = { // Définir le type ici
    chart: { type: 'line', height: 325 },
    title: { text: 'Month wise sales' },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: { title: { text: 'Revenue in $' } },
    series: [
      {
        name: "Arizona",
        type: "line",  // type spécifique
        color: '#044342',
        data: [70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196]
      } as SeriesOptionsType, // Caster le type
      {
        name: 'Connecticut',
        type: 'line',  // type spécifique
        color: '#7e0505',
        data: [47, 52, 44, 35, 58, 69, 32, 53, 71, 82, 99, 159]
      } as SeriesOptionsType, // Caster le type
      {
        name: 'Ohio',
        type: 'line',  // type spécifique
        color: '#ed9e20',
        data: [17, 22, 14, 25, 18, 19, 22, 43, 11, 32, 29, 59]
      } as SeriesOptionsType  // Caster le type
    ],
    credits: { enabled: false }
  };

  constructor() {}

  ngOnInit(): void {}
}
