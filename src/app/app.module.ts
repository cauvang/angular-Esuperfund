import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultTableComponent } from './result-table/result-table.component';
import { ResultChartComponent } from './result-chart/result-chart.component';
import { ResultFilterComponent } from './result-filter/result-filter.component';
import { SurveyService } from './service/survey.service';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    ResultTableComponent,
    ResultChartComponent,
    ResultFilterComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    PaginationModule.forRoot()
  ],
  providers: [SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
