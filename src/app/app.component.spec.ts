import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { ApiDataService } from './services/api-data.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [DataService, ApiDataService]
    }).compileComponents();
  }));

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
});
