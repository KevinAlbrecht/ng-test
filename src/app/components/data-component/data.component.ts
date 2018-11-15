import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FullData } from '../../models/data.model';
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-data',
	templateUrl: './data.component.html',
	styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
	constructor(private fb: FormBuilder) {
		this.draftFormGroup = this.fb.group({
			reason: ['']
		});
	}

	draftFormGroup: FormGroup;

	@Input()
	data: FullData;

	@Input()
	group: FormGroup;

	@Output()
	setAsDraft: EventEmitter<string> = new EventEmitter();

	setTextAsDraft() {
		this.setAsDraft.emit(this.draftFormGroup.controls.reason.value);
	}

	ngOnInit() {

	}

}
