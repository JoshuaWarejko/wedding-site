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
	guestsAccepted = 0;
	guestsDeclined = 0;
	guestsNotResponded = 0;
	guests: AsyncItem<Guest>[] = [];

	displayChoice: string = 'all';

	state = queryState;

	constructor(private rsvpService: RsvpService) { }

	ngOnInit() {
		this.rsvpService.getGuests().subscribe((response: AsyncItem<Guest>[]) => {
			this.guests = response;
			this.guestsInvited = response.length;
			console.log(response);
			if(response.length && response[0].data) {
				response.forEach(item => {
					if(item.data.accept) this.guestsAccepted++;
					else if(!item.data.accept && ('accept' in item.data)) this.guestsDeclined++;
					else this.guestsNotResponded++;
				});
			}
		}, error => {
			console.error(error);
		});
	}

}
