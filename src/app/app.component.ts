import { Component, Inject } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor(
		@Inject('WINDOW') private window: any
	) {
		if(this.window.WOW) {
			new this.window.WOW().init();
		}
	}

}
