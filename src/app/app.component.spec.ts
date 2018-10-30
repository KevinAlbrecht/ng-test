import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { ApiDataService } from './services/api-data.service';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { Data } from './models/data.model';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [DataService, ApiDataService]
    }).compileComponents();
  }));

  const fakeApiDatas = [{
    id: 1,
    title: 'one',
    description: 'text'
  },
  {
    id: 2,
    title: 'two',
    description: 'text2'
  },
  {
    id: 3,
    title: 'three',
    description: 'text3'
  }];

  const getApiDatasMock = (): Observable<Data[]> => {
    return of(fakeApiDatas);
  };

  describe('Init and injection', () => {
    it('should create the app', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    }));
    it('should the service could be injected into the component', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const service = fixture.debugElement.injector.get(DataService);
      expect(service).toBeTruthy();
    }));
    it('should call getData on init', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const service = fixture.debugElement.injector.get(DataService);
      spyOn(service, 'getDatas').and.callThrough();
      fixture.componentInstance.ngOnInit();
      expect(service.getDatas).toHaveBeenCalled();
      expect(service.getDatas).toHaveBeenCalledTimes(1);
    }));
  });

  describe('Content appear', () => {
    it(`should have as title 'app'`, async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('app');
    }));
    it('should render title in a h1 tag', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    }));
    it('should show three items', async(inject([ApiDataService], (apiService: ApiDataService) => {
      spyOn(apiService, 'getApiDatas').and.callFake(getApiDatasMock);
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;

      const lis = compiled.querySelectorAll('ul li');
      expect(lis.length).toBe(3);

      lis.forEach((li, i) => {
        expect(li.textContent).toBe(fakeApiDatas[i].title);
      });
    })));
  });
});
