export interface ICat {
	id: number;
	name: string;
	shortInfo: string;
	more: string;
}

export interface ICatDetailProps {
	catDetail: {
		bio: string;
		id: number;
		pic: string;
	};
	url: string;
}

export interface INotification {
	[key: string]: string;
}

export interface IFormState {
	kind: string;
	name: string;
	email: string;
	showNotification: boolean;
}
