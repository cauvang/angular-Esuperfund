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

  @Output() filterChange = new EventEmitter();
  listItems: ISelectItem[];
  selectAll: boolean;
  @Input() className: string;

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges() {
    if (!this.data) {
      return;
    }
    this.listItems = this.data.map(name => {
      return { name, selected: false };
    });
  }

  onChange() {
    const filterValues = this.listItems.filter(x => x.selected).map(x => x.name);
    this.filterChange.emit(filterValues);
  }

  onCheckAll() {
    this.listItems.forEach(element => {
      element.selected = this.selectAll;
    });
    this.onChange();
  }
}
