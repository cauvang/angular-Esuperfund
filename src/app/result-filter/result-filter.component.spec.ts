import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { ResultFilterComponent } from './result-filter.component';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SpyNgModuleFactoryLoader } from '@angular/router/testing';

let de: DebugElement;
let el: HTMLElement;

describe('ResultFilterComponent', () => {
  let component: ResultFilterComponent;
  let fixture: ComponentFixture<ResultFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultFilterComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultFilterComponent);
    component = fixture.componentInstance;
    component.data = ['aaa', 'bbb'];
    component.title = 'test filter';
    component.className = 'test_className';
    fixture.detectChanges();
  });

  it('should render without error', () => {
    expect(component).toBeTruthy();
  });

  it('should render title as "test filter"', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.filters-name').textContent).toContain('test filter');
  });

  it('should render className as "test className"', () => {
    component.ngOnChanges();
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.test_className')).not.toBeNull();
  });

  it('should render 2 checkbox', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.ngOnChanges();
    fixture.detectChanges();
    expect(compiled.querySelectorAll('.filters-item input').length).toBe(2);
  });


  it('Should update set all item to selected on checkbox click', fakeAsync(() => {
    component.ngOnChanges();
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('.checkAll'));
    el = de.nativeElement;

    // Neither click appears to trigger the change event to occur, or update the model
    de.triggerEventHandler('click', {});
    el.click();

    tick(100);
    expect(component.listItems).toEqual([{ name: 'aaa', selected: true }, { name: 'bbb', selected: true }]);
  }));

  it('Should raise event filterChange when checkbox click', fakeAsync(() => {
    component.ngOnChanges();
    fixture.detectChanges();
    spyOn(component.filterChange, 'emit');

    de = fixture.debugElement.query(By.css('.checkAll'));
    el = de.nativeElement;

    de.triggerEventHandler('click', {});
    el.click();

    tick(100);
    expect(component.listItems).toEqual([{ name: 'aaa', selected: true }, { name: 'bbb', selected: true }]);

    expect(component.filterChange.emit).toHaveBeenCalledWith(['aaa', 'bbb']);
  }));
});
