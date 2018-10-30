import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Data } from './models/data.model';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'app';
	datas$: Observable<Data[]>;

	constructor(private dataService: DataService) {
	}

	ngOnInit() {
		this.datas$ = this.dataService.getDatas();
	}

	select(id: number) { }
}
