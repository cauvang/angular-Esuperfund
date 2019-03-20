import { TestBed } from '@angular/core/testing';
import { SurveyService } from './survey.service';
import { HttpClientModule } from '@angular/common/http';

describe('SurveyService tests', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: SurveyService = TestBed.get(SurveyService);
    expect(service).toBeTruthy();
  });
  it('getSurveyInfo() should be return data', () => {
    const service: SurveyService = TestBed.get(SurveyService);
    service.getSurveyInfo().subscribe((data) => {

      expect(data).not.toBeNull();
      expect(data.length).toBe(500);
    });
  });


  it('getUniqueValues should return unique values', () => {
    const service: SurveyService = TestBed.get(SurveyService);
    const data = [{
      "_id": "5c90d1720285fe32952dc0ba",
      "index": 0,
      "age": 49,
      "name": "Sophie",
      "gender": "female",
      "favoriteFruit": "banana",
      "favoriteColor": "red"
    },
    {
      "_id": "5c90d1722041e7a06aafcb95",
      "index": 1,
      "age": 41,
      "name": "Ada",
      "gender": "female",
      "favoriteFruit": "mango",
      "favoriteColor": "goldenrod"
    },
    {
      "_id": "5c90d17291ae9607691641ee",
      "index": 2,
      "age": 59,
      "name": "Jeri",
      "gender": "female",
      "favoriteFruit": "banana",
      "favoriteColor": "aquamarine"
    }]
    const values = service.getUniqueValues(data, "favoriteFruit")
    expect(values.length).toBe(2);
    expect(values[0]).toBe("banana")
    expect(values[1]).toBe("mango")
  })

});
