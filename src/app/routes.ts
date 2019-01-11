import { Routes } from '@angular/router'

import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ProposalComponent } from './pages/proposal/proposal.component';
import { WeddingDetailsComponent } from './pages/wedding-details/wedding-details.component';
import { RegistryComponent } from './pages/registry/registry.component';
import { AccommodationsComponent } from './pages/accommodations/accommodations.component';

export const routes: Routes = [
	{
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
        data: {}
	},
	{
        path: 'proposal',
        component: ProposalComponent,
        pathMatch: 'full',
        data: {}
	},
	{
        path: 'wedding-details',
        component: WeddingDetailsComponent,
        pathMatch: 'full',
        data: {}
	},
	{
        path: 'registry',
        component: RegistryComponent,
        pathMatch: 'full',
        data: {}
	},
	{
        path: 'accommodations',
        component: AccommodationsComponent,
        pathMatch: 'full',
        data: {}
	},
    {
        path: 'landing',
        component: LandingComponent,
        pathMatch: 'full',
        data: {}
	}
]
