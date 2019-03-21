import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultTableComponent } from './result-table.component';

describe('ResultTableComponent', () => {
  let component: ResultTableComponent;
  let fixture: ComponentFixture<ResultTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResultTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultTableComponent);
    component = fixture.componentInstance;
    component.data = [
      {
        '_id': '5c90d172bfe505910e57fecf',
        'index': 78,
        'age': 50,
        'name': 'Ava',
        'gender': 'female',
        'favoriteFruit': 'jackfruit',
        'favoriteColor': 'cyan'
      },
      {
        '_id': '5c90d1720d73f9728cc55ff5',
        'index': 79,
        'age': 54,
        'name': 'Julianne',
        'gender': 'female',
        'favoriteFruit': 'orange',
        'favoriteColor': 'pink'
      },
      {
        '_id': '5c90d1725c649a97fa621ede',
        'index': 80,
        'age': 51,
        'name': 'Luisa',
        'gender': 'female',
        'favoriteFruit': 'apple',
        'favoriteColor': 'linen'
      },
      {
        '_id': '5c90d17216956b097e50b50a',
        'index': 81,
        'age': 26,
        'name': 'Angela',
        'gender': 'female',
        'favoriteFruit': 'dragon fruit',
        'favoriteColor': 'honeydew'
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should render table with 4 rows', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.data-row').length).toBe(4);
  });
});
