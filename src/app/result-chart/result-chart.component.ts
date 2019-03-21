import { Component, OnInit, Input } from '@angular/core';
import 'chart.js';

@Component({
  selector: 'app-result-chart',
  templateUrl: './result-chart.component.html',
  styleUrls: ['./result-chart.component.scss'],

})
export class ResultChartComponent implements OnInit {

  constructor() {

  }
  @Input() barChartLabels: string[];
  @Input() barChartData: [];
  @Input() title: string;

  public barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
    legend: {
      position: 'bottom',
  },
  scales: {
    xAxes: [{
            display: true,
            scaleLabel: {
                display: true,
            }
        }],
    yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true,
                steps: 10,
                stepValue: 5                
            }
        }]
},
  };

  public barChartType = 'bar';
  public barChartLegend = true;

  ngOnInit() {

  }

}
