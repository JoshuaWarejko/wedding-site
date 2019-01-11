import { Component, OnInit, ElementRef, ViewChild, Inject, Input } from '@angular/core';

@Component({
	selector: 'app-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

	@Input() imageSrc: string;
	@Input() title: string;
	@Input() subtitle: string;
	@Input() showGettingMarried: string;
	@Input() imagePosition: string;
	@ViewChild('headerSection') headerSection: ElementRef;
	windowHeight: any;
	displayImage: any;
	imageStyle: any;
	heroHeight: any;

	constructor(@Inject('WINDOW') private window: any) { }

	ngOnInit() {
		this.windowResize(null);
	}

	/**
	* Method that runs on window resize. Sets the height of slider to windowHeight.
	* @param event resize event
	*/
	windowResize(event: any) {
		if(this.window.innerWidth > 768) {
			this.displayImage = false;
			this.heroHeight = `${this.window.innerHeight - this.headerSection.nativeElement.offsetHeight}px`;
			this.imageStyle = { 'height': this.heroHeight}
			console.log(this.imagePosition);
			if(this.imagePosition) this.imageStyle.position = this.imagePosition;
		} else {
			this.imageStyle = {};
			this.displayImage = true;
		}
	}

}
