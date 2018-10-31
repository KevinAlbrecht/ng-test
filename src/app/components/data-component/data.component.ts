import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Observable } from 'rxjs/Observable';
import { FullData } from '../../models/data.model';

@Component({
	selector: 'app-data',
	templateUrl: './data.component.html',
	styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
	constructor() { }

	@Input()
	data: FullData;

	@Output()
	editedData = new EventEmitter();

	ngOnInit() {
	}

}
