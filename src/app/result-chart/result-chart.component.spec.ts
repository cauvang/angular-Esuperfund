import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultChartComponent } from './result-chart.component';
import { ChartsModule } from 'ng2-charts';

describe('ResultChartComponent', () => {
  let component: ResultChartComponent;
  let fixture: ComponentFixture<ResultChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultChartComponent], imports: [ChartsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultChartComponent);
    component = fixture.componentInstance;
    component.title = 'test chart';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title as "test chart"', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.chart-name').textContent).toContain('test chart');
  });
});
