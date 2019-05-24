import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import * as moment from 'moment-timezone';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	showNavigationArrows = true;
	showNavigationIndicators = true;
	images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => `../../../assets/images/carousel${value}.jpg`);
	imageIndex: number = 0;
	popup = false;

	days: number;
	hours: number;
	minutes: number;
	seconds: number;

	weAreMarried: boolean;

	constructor(config: NgbCarouselConfig, private http: HttpClient) {
		moment.tz.setDefault(moment.tz.guess());
		// customize default values of carousels used by this component tree
		config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
		config.interval = 1000000000;
		config.keyboard = false;
		config.pauseOnHover = false;
		config.wrap = true;
	}

	ngOnInit() {
		const countdownDate = new Date(2019, 5, 7, 18, 30, 0).getTime(); // June 7, 2019 at 6:30pm
		this.weAreMarried = false;
		// Update the count down every 1 second
		// https://www.w3schools.com/howto/howto_js_countdown.asp
		const countdownInterval = setInterval(() => {
			const now = new Date().getTime();
			// Find the distance between now and the count down date
			const distance = countdownDate - now;
			// Time calculations for days, hours, minutes and seconds
			this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
			this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
			// If the count down is finished, write some text
			if (distance < 0) {
				clearInterval(countdownInterval);
				// TODO: Display text that we are now married.
				this.weAreMarried = true;
			}
		}, 1000);
	}


}
