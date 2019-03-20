import { Component, OnInit } from '@angular/core';
import { ISurveyItem } from '../model/survey';
import { SurveyService } from '../service/survey.service';

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

  public genderFilters: string[];
  public fruitFilters: string[];
  public colorFilters: string[];

  public colorData = [];
  public fruitData = [];


  constructor(private service: SurveyService) {

  }

  onGenderChange(filterValue: string[]) {
    this.genderFilters = filterValue.length === 0 ? this.genders : filterValue;
    this.applyFilters();
  }
  onFruitChange(filterValue: string[]) {
    this.fruitFilters = filterValue.length === 0 ? this.fruits : filterValue;
    this.applyFilters();
  }
  onColorChange(filterValue: string[]) {
    this.colorFilters = filterValue.length === 0 ? this.colors : filterValue;
    this.applyFilters();
  }

  applyFilters() {
    this.refreshData();
    this.refreshChart();
  }

  refreshData() {
    this.filteredData = this.data.filter(item => {
      // if (this.genderFilters.length == 0) return true;
      return this.genderFilters.indexOf(item.gender) >= 0;
    });

    this.filteredData = this.filteredData.filter(item => {
      // if (this.fruitFilters.length == 0) return true;
      return this.fruitFilters.indexOf(item.favoriteFruit) >= 0;
    });

    this.filteredData = this.filteredData.filter(item => {
      // if (this.colorFilters.length == 0) return true;
      return this.colorFilters.indexOf(item.favoriteColor) >= 0;
    });
  }

  refreshChart() {
    this.colorData = [
      { data: this.service.getValues(this.filteredData, 'favoriteColor', 'female'), label: 'Female' },
      { data: this.service.getValues(this.filteredData, 'favoriteColor', 'male'), label: 'Male' }
    ];
    this.fruitData = [
      { data: this.service.getValues(this.filteredData, 'favoriteFruit', 'female'), label: 'Female' },
      { data: this.service.getValues(this.filteredData, 'favoriteFruit', 'male'), label: 'Male' }
    ];
  }

  ngOnInit() {
    this.service.getSurveyInfo().subscribe((data) => {
      this.data = data;
      this.filteredData = data;

      this.genders = this.service.getUniqueValues(data, 'gender');
      this.colors = this.service.getUniqueValues(data, 'favoriteColor');
      this.fruits = this.service.getUniqueValues(data, 'favoriteFruit');

      this.genderFilters = this.genders;
      this.colorFilters = this.colors;
      this.fruitFilters = this.fruits;

      this.colorData = [
        { data: this.service.getValues(data, 'favoriteColor', 'female'), label: 'Female' },
        { data: this.service.getValues(data, 'favoriteColor', 'male'), label: 'Male' }
      ];
      this.fruitData = [
        { data: this.service.getValues(data, 'favoriteFruit', 'female'), label: 'Female' },
        { data: this.service.getValues(data, 'favoriteFruit', 'male'), label: 'Male' }
      ];

    });
  }
}
