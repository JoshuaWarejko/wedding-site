import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Inject } from '@angular/core';

@Component({
	selector: 'app-registry',
	templateUrl: './registry.component.html',
	styleUrls: ['./registry.component.scss']
})
export class RegistryComponent implements OnInit, AfterViewInit {

	registryLoaded: boolean;

	constructor(@Inject('WINDOW') private window: any) { }

	ngOnInit() { }

	ngAfterViewInit(): void {
		this.window.MyRegistryEmbed.initialize();
	}

	private injectScript(src) {
		return new Promise((resolve, reject) => {
			const script = document.createElement('script');
			script.async = true;
			script.src = src;
			script.addEventListener('load', resolve);
			script.addEventListener('error', () => reject('Error loading script.'));
			script.addEventListener('abort', () => reject('Script loading aborted.'));
			document.head.appendChild(script);
		});
	}

	ngOnDestroy(): void {
		console.log('Destroying');
		this.window.MyRegistryEmbed.destroy();
	}

}
