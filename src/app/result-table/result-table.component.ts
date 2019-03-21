import { Component, OnInit, Input } from '@angular/core';
import { ISurveyItem } from '../model/survey';
import { PageChangedEvent } from 'ngx-bootstrap/pagination/ngx-bootstrap-pagination';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss']
})
export class ResultTableComponent implements OnInit {
  @Input() data: ISurveyItem[];

  constructor() { }

  ngOnInit() {
  }

}
