import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'round' })
export class RoundPipe implements PipeTransform {
	transform(n: number, type?: 'round' | 'ceil' | 'floor') {
		switch (type) {
			case 'ceil':
				return Math.ceil(n);
			case 'floor':
				return Math.floor(n);
			case 'round':
			default:
				return Math.round(n);
		}
	}
}
