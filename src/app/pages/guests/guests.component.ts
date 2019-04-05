import { Component, OnInit } from '@angular/core';
import { RsvpService } from '../../providers';
import { AsyncItem, queryState } from '../../async-item';
import { Household, Guest } from '../../interfaces';

@Component({
	selector: 'app-guests',
	templateUrl: './guests.component.html',
	styleUrls: ['./guests.component.scss']
})
export class GuestsComponent implements OnInit {

	guestsInvited: number;
	guestsAccepted: number;
	guestsDeclined: number;
	guests: AsyncItem<Guest>[] = [];

	displayChoice: string = 'all';

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
		this.rsvpService.getGuests().subscribe(response => {
			this.guests = response;
		}, error => {
			console.error(error);
		});
	}

}
