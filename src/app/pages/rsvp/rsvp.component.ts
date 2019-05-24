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

	searched: boolean;

	success: any;

	successMessage: any;

	displayRsvp: boolean;

	constructor(private rsvpService: RsvpService) { }

	ngOnInit() {
		this.displayRsvp = false;
	}

	searchForHouseholds() {
		this.searched = false;
		this.households = [];
		this.chosenHousehold = null;
		this.success = false;
		this.successMessage = null;
		this.rsvpService.searchHouseholds(this.householdSearch).subscribe(response => {
			this.searched = true;
			if(response.length !== 1) {
				this.households = response;
			} else {
				this.households = [];
				this.chosenHousehold = response[0].data;
			}
		}, error => {
			console.error(error);
			this.searched = true;
		});
	}

	selectHousehold(household: AsyncItem<Household>) {
		this.chosenHousehold = household.data;
	}

	submitRsvp() {
		this.success = false;
		this.successMessage = false;
		this.rsvpService.submitRsvp(this.chosenHousehold).subscribe(response => {
			this.success = true;
			let accepted = false;
			this.chosenHousehold.guests.forEach(guest => {
				if(guest.accept) accepted = true;
			});
			if(accepted) {
				this.successMessage = 'We are so excited that you will be joining us on our special day!';
			} else {
				this.successMessage = 'We are so sad that you will not be joining us on our special day!';
			}
		}, error => {
			console.error(error);
			this.success = false;
		});
	}

}
