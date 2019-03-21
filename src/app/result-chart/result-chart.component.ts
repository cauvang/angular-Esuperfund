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
    responsive: true
  };

  public barChartType = 'bar';
  public barChartLegend = true;

  ngOnInit() {

  }

}
