import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiDataService } from './api-data.service';
import { Data } from '../models/data.model';

@Injectable()
export class DataService {

  constructor(private apiService: ApiDataService) { }

  getDatas(): Observable<Data[]> {
    return this.apiService.getApiDatas();
  }
}
