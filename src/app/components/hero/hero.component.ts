import { Component, OnInit, ElementRef, ViewChild, Inject, Input } from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';

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
	@Input() scrollLink: { text: string, anchor: string };
	@Input() weAreMarried: boolean;
	@ViewChild('headerSection') headerSection: ElementRef;
	windowHeight: any;
	displayImage: any;
	imageStyle: any;
	heroHeight: any;

	constructor(@Inject('WINDOW') private window: any, @Inject('DOCUMENT') private document: any, private scrollService: PageScrollService) { }

	ngOnInit() {
		this.windowResize(null);
		console.log(this.scrollLink)
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
			if(this.imagePosition) this.imageStyle.position = this.imagePosition;
		} else {
			this.imageStyle = {};
			this.displayImage = true;
		}
	}

	scroll() {
		if(this.scrollLink) {
			this.scrollService.scroll({
				document: this.document,
				scrollTarget: this.scrollLink.anchor
			})
		}
	}

}
