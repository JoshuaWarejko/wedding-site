import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AsyncHousehold, Household } from '../../interfaces';
import { makeAsyncItem, AsyncItemState, AsyncItem } from '../../async-item';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, delay } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class RsvpService {

	private householdsAnnouncer = new BehaviorSubject<AsyncHousehold>(this.buildGhosts(5));
	households$ = this.householdsAnnouncer.asObservable();

	public RESPONSE_DELAY = 1000;

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

	submitRsvp(householdData: Household): Observable<any> {
		return this.http.post(`${environment.apiUrl}/api/Households/${householdData.id}/rsvp`, { householdData: householdData });
	}

	getHouseholds(): Observable<AsyncItem<Household>[]> {
		this.householdsAnnouncer.next(this.buildGhosts(10));
		const query = {
			include: 'guests',
			orderBy: 'name ASC'
		}
		this.http.get(`${environment.apiUrl}/api/Households?filter=${JSON.stringify(query)}`)
		.pipe(delay(this.RESPONSE_DELAY), map(this.wrapAsAsyncItems))
		.subscribe(response => {
			this.householdsAnnouncer.next(response);
		});
		return this.households$;
	}

	getGuestCount(whereClause: any): Observable<any> {
		return this.http.get(`${environment.apiUrl}/api/Guests/count?where=${JSON.stringify(whereClause)}`);
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
