import { Component, OnInit } from '@angular/core';
import { RsvpService } from '../../providers';
import { AsyncItem, queryState } from '../../async-item';
import { Household } from '../../interfaces';

@Component({
	selector: 'app-guests',
	templateUrl: './guests.component.html',
	styleUrls: ['./guests.component.scss']
})
export class GuestsComponent implements OnInit {

	guestsInvited: number;
	guestsAccepted: number;
	guestsDeclined: number;
	households: AsyncItem<Household>[] = [];

	state = queryState;

	constructor(private rsvpService: RsvpService) { }

	ngOnInit() {
		this.rsvpService.getGuestCount({}).subscribe(response => {
			this.guestsInvited = response.count;
		}, error => {
			console.error(error);
		});
		this.rsvpService.getGuestCount({accept: true}).subscribe(response => {
			this.guestsAccepted = response.count;
		}, error => {
			console.error(error);
		});
		this.rsvpService.getGuestCount({accept: false}).subscribe(response => {
			this.guestsDeclined = response.count;
		}, error => {
			console.error(error);
		});
		this.rsvpService.getHouseholds().subscribe(response => {
			console.log(response);
			this.households = response;
		}, error => {
			console.error(error);
		});
	}

	expandAll() {
		this.households.forEach(household => {
			household.data.expanded = true;
		});
	}

	closeAll() {
		this.households.forEach(household => {
			household.data.expanded = false;
		});
	}

}
