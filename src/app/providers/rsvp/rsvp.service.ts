import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AsyncHousehold, Household } from 'src/app/interfaces';
import { makeAsyncItem, AsyncItemState, AsyncItem } from 'src/app/async-item';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, delay } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class RsvpService {

	private householdsAnnouncer = new BehaviorSubject<AsyncHousehold>(this.buildGhosts(5));
	households$ = this.householdsAnnouncer.asObservable();

	public RESPONSE_DELAY = 2000;

	constructor(private http: HttpClient) { }

	searchHouseholds(name: string): Observable<AsyncItem<Household>[]> {
		this.householdsAnnouncer.next(this.buildGhosts(2));
		const query = {
			where: {
				name: name
			},
			include: 'guests'
		}
		this.http.get(`${environment.apiUrl}/api/Households?filter=${JSON.stringify(query)}`)
		.pipe(delay(this.RESPONSE_DELAY), map(this.wrapAsAsyncItems))
		.subscribe(response => {
			this.householdsAnnouncer.next(response);
		});
		return this.households$;
	}

	// ********************************************************
	// ****************   Utils
	// ********************************************************

	/**
	* Build initial list of Ghost elements
	*/
	buildGhosts(amountOfGhosts: number): any {
		const ghosts = new Array(amountOfGhosts).fill(null);
		return this.wrapAsAsyncItems(ghosts);
	}

	/**
	* Wrap `item` values for async presentation with ghosts.
	* The 'any' types need to be the same type.
	*/
	wrapAsAsyncItems(list) {
		return list.map((item: any) => makeAsyncItem<any>(item, AsyncItemState.LOADING));
	}
}
