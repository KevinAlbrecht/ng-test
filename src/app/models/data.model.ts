
export interface FullData {
	id: number;
	title: string;
	description: string;
}

export interface SimpleData {
	id: number;
	title: string;
}

export interface DataFormModel {
	dataValue: number;
	subGroup: { newDescription: string };
}
