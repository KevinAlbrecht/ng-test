import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataComponent } from './data.component';

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;
  const songName = 'Partir un jour';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DataComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  it('should get shortened txt from component', () => {
    component.text = songName;
    expect(component.shortText).toBeTruthy();
    expect(component.shortText.length).toBe(3);
  });
  it('should emit the full text from component', () => {
    spyOn(component.selectedItem, 'emit').and.callThrough();
    component.text = songName;
    component.selectItem();
    expect(component.selectedItem.emit).toHaveBeenCalledWith(songName);
  });
});
