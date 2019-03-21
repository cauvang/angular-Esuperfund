import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination/ngx-bootstrap-pagination';

import { ISurveyItem, ISelectItem } from '../model/survey';
import { SurveyService } from '../service/survey.service';
import { Constants } from '../constant';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private data: ISurveyItem[];

  public filteredData: ISurveyItem[];
  public genders: string[];
  public fruits: string[];
  public colors: string[];


  private filteredGenders: string[];
  private filteredFruits: string[];
  private filteredColors: string[];
  public colorData = [];
  public fruitData = [];
  public chartFruits: string[];
  public chartColors: string[];

  numberOfPages = 10;
  pageData: ISurveyItem[];
  currentPage = 1;
  page: number;
  totalItems = 0;
  itemsPerPage = Constants.itemsPerPage;

  public loading = true;
  public hasError = false;

  constructor(private service: SurveyService) {
  }

  onDataLoadSuccess(data: ISurveyItem[]) {
    this.data = data;
    this.filteredData = data;

    this.genders = this.service.getUniqueValues(data, 'gender');
    this.colors = this.service.getUniqueValues(data, 'favoriteColor');
    this.fruits = this.service.getUniqueValues(data, 'favoriteFruit');

    this.filteredGenders = this.genders;
    this.filteredColors = this.colors;
    this.filteredFruits = this.fruits;

    this.chartColors = this.colors;
    this.chartFruits = this.fruits;

    this.colorData = [
      { data: this.service.getValuesByGender(data, 'favoriteColor', 'female'), label: 'Female' },
      { data: this.service.getValuesByGender(data, 'favoriteColor', 'male'), label: 'Male' }
    ];
    this.fruitData = [
      { data: this.service.getValuesByGender(data, 'favoriteFruit', 'female'), label: 'Female' },
      { data: this.service.getValuesByGender(data, 'favoriteFruit', 'male'), label: 'Male' }
    ];
    this.pageData = this.filteredData.slice(0, this.itemsPerPage);
    this.totalItems = this.filteredData.length;

    this.loading = false;

  }
  onDataLoadError(err) {
    this.loading = false;
    this.hasError = true;
  }

  loadData() {
    this.loading = true;
    this.hasError = false;
    this.service.getSurveyInfo().subscribe(data => this.onDataLoadSuccess(data), error => this.onDataLoadError(error));

  }

  ngOnInit() {
    this.loadData();
  }


  onGenderChange(filterValue: string[]) {
    this.filteredGenders = filterValue.length === 0 ? this.genders : filterValue;
    this.applyFilters();
  }
  onFruitChange(filterValue: string[]) {
    this.filteredFruits = filterValue.length === 0 ? this.fruits : filterValue;
    this.applyFilters();
  }
  onColorChange(filterValue: string[]) {
    this.filteredColors = filterValue.length === 0 ? this.colors : filterValue;
    this.applyFilters();
  }

  applyFilters() {
    this.refreshData();
    this.refreshChart();
  }

  refreshData() {
    this.filteredData = this.data.filter(item => {
      return this.filteredGenders.includes(item.gender)
        && this.filteredFruits.includes(item.favoriteFruit)
        && this.filteredColors.includes(item.favoriteColor);
    });



    this.totalItems = this.filteredData.length;
    this.pageData = this.filteredData.slice(0, this.itemsPerPage);
  }

  refreshChart() {
    this.chartColors = this.service.getUniqueValues(this.filteredData, 'favoriteColor');
    this.chartFruits = this.service.getUniqueValues(this.filteredData, 'favoriteFruit');

    this.colorData = [
      { data: this.service.getValuesByGender(this.filteredData, 'favoriteColor', 'female'), label: 'Female' },
      { data: this.service.getValuesByGender(this.filteredData, 'favoriteColor', 'male'), label: 'Male' }
    ];
    this.fruitData = [
      { data: this.service.getValuesByGender(this.filteredData, 'favoriteFruit', 'female'), label: 'Female' },
      { data: this.service.getValuesByGender(this.filteredData, 'favoriteFruit', 'male'), label: 'Male' }
    ];
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.pageData = this.filteredData.slice(startItem, endItem);
  }

}
