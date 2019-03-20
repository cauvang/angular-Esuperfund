import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { ResultFilterComponent } from './result-filter.component';
import { FormsModule } from '@angular/forms';

describe('ResultFilterComponent', () => {
  let component: ResultFilterComponent;
  let fixture: ComponentFixture<ResultFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultFilterComponent],
      imports: [
        FormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultFilterComponent);
    component = fixture.componentInstance;
    component.data = ["aaa", "bbb"];
    component.title = "test filter";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render title as "test filter"', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.filter-name').textContent).toContain('test filter');
  })

  it('should render 2 checkbox', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.ngOnChanges();
    fixture.detectChanges();
    expect(compiled.querySelectorAll('.filters-item input').length).toBe(2);
  })
  // it("should raise event when checkbox click", () => {
  //   spyOn(component.filterChange, 'emit');
  //   const compiled = fixture.debugElement.nativeElement;

  //   component.ngOnChanges();
  //   fixture.detectChanges();
  //   tick();
  //   const checkbox = compiled.querySelector(".filters-item input");
  //   checkbox.dispatchEvent(new Event('click'));
  //   tick();
  //   fixture.detectChanges();
  //   expect(component.filterChange.emit).toHaveBeenCalledWith(["aaa"]);
  // })

});
