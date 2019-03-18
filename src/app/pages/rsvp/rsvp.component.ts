import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RsvpService } from '../../providers';
import { AsyncItem, queryState } from '../../async-item';
import { Household } from '../../interfaces';

@Component({
	selector: 'app-rsvp',
	templateUrl: './rsvp.component.html',
	styleUrls: ['./rsvp.component.scss']
})
export class RsvpComponent implements OnInit {

	state = queryState;

	householdSearch: string;

	households: AsyncItem<Household>[] = [];

	chosenHousehold: Household;

	constructor(private rsvpService: RsvpService) { }

	ngOnInit() { }

	searchForHouseholds() {
		this.households = [];
		this.chosenHousehold = null;
		this.rsvpService.searchHouseholds(this.householdSearch).subscribe(response => {
			if(response.length !== 1) {
				this.households = response;
			} else {
				this.households = [];
				this.chosenHousehold = response[0].data;
			}
			console.log(this.households, this.chosenHousehold);
		});
	}

	submitRsvp() {

	}

}
