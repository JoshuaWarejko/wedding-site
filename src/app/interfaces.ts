import { AsyncItem } from './async-item';

export interface Room {
	title: string;
	size: string;
	features: string[];
	description: string;
	cost: number;
	image: string;
	readMore?: boolean;
}

export interface Household {
	id: string;
	name: string;
	head: string;
	stayingInRpv?: boolean;
	stayingLocation?: string;
	guests?: Guest[];
}

export type AsyncHousehold = AsyncItem<Household>[];

export interface Guest {
	id: string;
	firstName: string;
	lastName: string;
	foodChoice?: string;
	accept?: boolean;
}


