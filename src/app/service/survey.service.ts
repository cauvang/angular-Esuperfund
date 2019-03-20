import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISurveyItem } from '../model/survey';
import { Constants } from '../constant';

@Injectable({
  providedIn: 'root'
})

export class SurveyService {

  constructor(private http: HttpClient) { }

  public getSurveyInfo(): Observable<ISurveyItem[]> {
    return this.http.get<ISurveyItem[]>(Constants.dataUrl);
  }

  public getUniqueValues(data: ISurveyItem[], propertyName: string) {
    const hashTable = {};
    data.forEach(element => {
      hashTable[element[propertyName]] = 1;
    });
    return Object.keys(hashTable);
  }

  public getValues(data: ISurveyItem[], propertyName: string, genderType: string) {
    const hashTable = {};
    data.forEach(element => {
      if (hashTable[element[propertyName]] == null) {
        if (element['gender'] == genderType)
          hashTable[element[propertyName]] = 1;
        else
          hashTable[element[propertyName]] = 0;
      }
      else {
        if (element['gender'] == genderType)
          hashTable[element[propertyName]]++;
      }
    });
    // console.log("hash", hashTable);
    // console.log("value", Object.values(hashTable));
    return Object.values(hashTable);
  }
}
