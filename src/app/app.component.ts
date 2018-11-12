import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { FullData, SimpleData, DataFormModel } from './models/data.model';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/first';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'app';

	datas$: Observable<SimpleData[]>;
	selectedData: FullData;

	subGroup: FormGroup;

	dataFormGroup: FormGroup;
	constructor(private dataService: DataService, private fb: FormBuilder) {
		this.dataFormGroup = this.fb.group({
			dataValue: [0, Validators.required],
			subGroup: this.fb.group({
				newDescription: ['', Validators.required]
			})
		});

		this.subGroup = <FormGroup>this.dataFormGroup.get('subGroup');
	}

	ngOnInit() {
		this.datas$ = this.dataService.getDatas();
		this.dataFormGroup.controls.dataValue.valueChanges
			.switchMap(selectedId => this.dataService.getData(+selectedId))
			.subscribe((value) => {
				this.selectedData = <FullData>{
					description: value.description,
					id: value.id,
					title: value.title
				};
			});

	}

	editData() {
		const formValue = <DataFormModel>this.dataFormGroup.value;

		this.dataService.editDataById(
			+formValue.dataValue,
			formValue.subGroup.newDescription)
			.first()
			.subscribe((value) => {
				this.dataFormGroup.get('subGroup').reset();
				this.selectedData = <FullData>{
					description: value.description,
					id: value.id,
					title: value.title
				};
			});
	}
}
