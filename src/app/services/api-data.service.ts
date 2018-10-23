import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Data } from '../models/data.model';

@Injectable()
export class ApiDataService {

  constructor() { }

  getApiDatas(): Observable<Data[]> {
    return Observable.of([
      { id: 1, title: 'first item', description: 'this is the first item of datas' },
      { id: 2, title: 'Second item', description: 'this is the second item of datas' },
      { id: 999, title: 'n item', description: 'this is the n item of datas' }
    ]);
  }
}
