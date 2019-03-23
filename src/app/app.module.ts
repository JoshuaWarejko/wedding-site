import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Imports ( 3rd Party Modules )
import { NgbModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { ProposalComponent } from './pages/proposal/proposal.component';
import { WeddingDetailsComponent } from './pages/wedding-details/wedding-details.component';
import { RegistryComponent } from './pages/registry/registry.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AccommodationsComponent } from './pages/accommodations/accommodations.component';
import { RsvpComponent } from './pages/rsvp/rsvp.component';

// Components
import { HeaderComponent, FooterComponent, VideoComponent } from './components';
import { HeroComponent } from './components/hero/hero.component';

// Pipes
import { SafePipe } from './pipes';

// Providers
import { RsvpService } from './providers';

import { AppComponent } from './app.component';

import { routes } from './routes';
import { GuestsComponent } from './pages/guests/guests.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        VideoComponent,
        LandingComponent,
        ProposalComponent,
        WeddingDetailsComponent,
        RegistryComponent,
        HeroComponent,
        AccommodationsComponent,
        SafePipe,
        RsvpComponent,
        GuestsComponent,
    ],
    imports: [
		BrowserModule,
		HttpClientModule,
		AngularFontAwesomeModule,
		NgxPageScrollCoreModule,
		FormsModule,
		HttpClientModule,
        NgbModule.forRoot(),
        RouterModule.forRoot(routes,
            { enableTracing: false } // <-- debugging purposes only
        ),
    ],
    providers: [
		{ provide: 'DOCUMENT', useFactory: getDocument },
		{ provide: 'WINDOW', useFactory: getWindow },
		NgbCarouselConfig,
		RsvpService
	],
	bootstrap: [AppComponent],
	entryComponents: [ VideoComponent ]
})
export class AppModule { }


export function getWindow() {
    return (typeof window !== "undefined") ? window : null;;
}

export function getDocument() {
	return (typeof document !== 'undefined') ? document : null;
}

