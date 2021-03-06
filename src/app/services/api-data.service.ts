import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { FullData, SimpleData } from '../models/data.model';

@Injectable()
export class ApiDataService {

	constructor() { }

	private forcedData: FullData[] = [
		{ id: 1, title: 'first item', description: 'this is the first item of datas' },
		{ id: 2, title: 'Second item', description: 'this is the second item of datas' },
		{ id: 999, title: 'n item', description: 'this is the n item of datas' }
	];

	private editDataByIdProcess(id: number, description: string) {
		const row = this.forcedData.find(d => {
			return d.id === id;
		});

		if (row) {
			row.description = description;
		}
	}

	getApiDatas(): Observable<SimpleData[]> {
		return Observable.of(this.forcedData.map(d => {
			return { id: d.id, title: d.title };
		}));
	}

	getApiData(id: number): Observable<FullData> {
		return Observable.of(this.forcedData.find(d => {
			return d.id === id;
		}));
	}
	editDataById(id: number, description: string): Observable<void> {
		return Observable.of(this.editDataByIdProcess(id, description));
	}
}
