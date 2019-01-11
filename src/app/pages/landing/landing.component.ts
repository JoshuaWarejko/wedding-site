import { Component, OnInit, Inject } from '@angular/core';
import { NgbCarouselConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VideoComponent } from '../../components/video/video.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

	images: any[];
	imageIndex: number = 0;
	popup = false;
	windowHeight: any;

	constructor(
		private config: NgbCarouselConfig,
		@Inject('WINDOW') private window: any,
		private modalService: NgbModal
	) {
		config.interval = 100000;
		// config.wrap = false;
		// config.keyboard = false;
		// config.pauseOnHover = false;
	}

	ngOnInit() {
		this.windowResize(null);
		this.windowHeight = `${this.window.innerHeight}px`;
		this.images = [
			{ url: 'url("../../../assets/images/engagement3.png")' },
			{ url: 'url("../../../assets/images/engagement1.png")' },
			// { url: '../../../assets/images/engagement1.png', alt: 'Engagement 3', title: 'Josh & Haley', subtext: 'We\'re Getting Married' }
		]
		// Timeout for showing the bottom save the date popup.
		setTimeout(() => {
			this.popup = true;
		}, 1500);
	}

	/**
	 * Method that runs on window resize. Sets the height of slider to windowHeight.
	 * @param event resize event
	 */
	windowResize(event: any) {
		this.windowHeight = `${this.window.innerHeight}px`;
	}

	/**
	 * Goes to the previous slide or to the last slide.
	 */
	prevSlide() {
		if(this.imageIndex - 1 >= 0) {
			this.imageIndex--;
		} else {
			this.imageIndex = this.images.length - 1;
		}
	}

	/**
	 * Goes to the next slide or back to the first slide.
	 */
	nextSlide() {
		if(this.imageIndex + 1 < this.images.length) {
			this.imageIndex++;
		} else {
			this.imageIndex = 0;
		}
	}

	openPopup() {
		const modal = this.modalService.open(VideoComponent, { windowClass: 'video-modal' });
	}

}
