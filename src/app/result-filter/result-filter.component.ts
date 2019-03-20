import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ISelectItem } from '../model/survey';

@Component({
  selector: 'app-result-filter',
  templateUrl: './result-filter.component.html',
  styleUrls: ['./result-filter.component.scss']
})

export class ResultFilterComponent implements OnInit, OnChanges {
  @Input() data: string[];
  @Input() title: string;

  @Output() onFilterChange = new EventEmitter();
  listItems: ISelectItem[];


  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges() {
    if (!this.data) {
      return;
    }
    this.listItems = this.data.map(name => {
      return { name, selected: false }
    })
  }

  onChange() {
    const filterValues = this.listItems.filter(x => x.selected).map(x => x.name);
    this.onFilterChange.emit(filterValues);
  }
}
