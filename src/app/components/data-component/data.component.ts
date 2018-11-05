import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Observable } from 'rxjs/Observable';
import { FullData } from '../../models/data.model';
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-data',
	templateUrl: './data.component.html',
	styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
	constructor() { }

	private _group: FormGroup;

	@Input()
	data: FullData;

	@Input()
	group: FormGroup;

	@Output()
	editedData = new EventEmitter();

	ngOnInit() {

	}

}
