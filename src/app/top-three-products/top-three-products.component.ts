import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { SeriesOptionsType } from 'highcharts'; // Import du type

@Component({
  standalone: true,
  imports: [HighchartsChartModule],
  selector: 'app-top-three-products',
  templateUrl: './top-three-products.component.html',
  styleUrls: ['./top-three-products.component.scss']
})
export class TopThreeProductsComponent implements OnInit {
  highcharts = Highcharts;
  chartOptions: Highcharts.Options = ({
    chart: {
      type: 'bar',
      height: 225
    },
    title: {
      text: 'Top 3 Products'
    },
    xAxis: {
      categories: [
        'Lenova Thinkpad E15',
        'Nectar Orange Juice',
        'Axe Deodarant',
      ]
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    series: [
     {
      type: 'bar',
      showInLegend: false,
      data: [
        {
          name: 'Lenova Thinkpad E15',
          y: 395,
          color: '#044342',
        },
        {
          name: 'Nectar Orange Juice',
          y: 385,
          color: '#7e0505',
        },
        {
          name: 'Axe Deodarant',
          y: 275,
          color: '#ed9e20',
        },
      ]
     }
    ],
    credits: {
      enabled: false
    }
  })

  constructor() { }

  ngOnInit(): void {
  }

}
