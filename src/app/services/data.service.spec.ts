import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';
import { ApiDataService } from './api-data.service';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

describe('Services', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DataService,
        ApiDataService]
    });
    resolvedApiService = TestBed.get(ApiDataService);
    resolvedService = TestBed.get(DataService);
  });

  let resolvedApiService: ApiDataService;
  let resolvedService: DataService;

  const serviceDatas = [
    { id: 1, title: 'first item', description: 'this is the first item of datas' },
    { id: 2, title: 'Second item', description: 'this is the second item of datas' },
    { id: 999, title: 'n item', description: 'this is the n item of datas' }
  ];

  const errorTestData = new Error('no Datas');

  it('should be created and return value', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
    service.getDatas().subscribe(response => {
      expect(response).toEqual(serviceDatas);
    });
  }));

  it('should throw an error', () => {
    spyOn(resolvedApiService, 'getApiDatas').and.throwError(errorTestData.message);
    expect(() => { resolvedApiService.getApiDatas(); }).toThrow(errorTestData);

    expect(() => {
      resolvedApiService.getApiDatas()
        .subscribe(
          data => fail('no ! it should throw an error'),
          err => { throw err; });
    });

    expect(() => {
      resolvedService.getDatas()
        .subscribe(
          data => fail('no ! it should relay an error'),
          err => { throw err; });
    }).toThrowError();
  });
});
