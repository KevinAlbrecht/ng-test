import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataComponent } from './data.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('DataComponent', () => {
	let component: DataComponent;
	let fixture: ComponentFixture<DataComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [DataComponent],
			imports: [ReactiveFormsModule]
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

	it('should create the component', () => {
		expect(component).toBeTruthy();
	});
});
