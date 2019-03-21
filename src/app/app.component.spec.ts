import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResultTableComponent } from './result-table/result-table.component';
import { ResultChartComponent } from './result-chart/result-chart.component';
import { ResultFilterComponent } from './result-filter/result-filter.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';
//import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ChartsModule,
        FormsModule,
        HttpClientModule,
        PaginationModule.forRoot()

      ],
      declarations: [
        AppComponent, DashboardComponent, ResultTableComponent,
        ResultChartComponent,
        ResultFilterComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
