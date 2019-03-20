import { Component, OnInit, Input } from '@angular/core';
import 'chart.js';

@Component({
  selector: 'app-result-chart',
  templateUrl: './result-chart.component.html',
  styleUrls: ['./result-chart.component.scss'],

})
export class ResultChartComponent implements OnInit {
  @Input() barChartLabels: string[];
  @Input() barChartData: [];

  constructor() {

  }

  ngOnInit() {

  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  // public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  // public barChartData = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Male' },
  //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Female' }
  // ];

}
