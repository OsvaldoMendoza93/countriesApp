import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryDetailComponent } from './pages/country-detail/country.detail.component';

const routes: Routes = [
    {
        path: 'por-pais',
        component: ByCountryComponent
    },
    {
        path: 'por-region',
        component: ByRegionComponent
    },
    {
        path: 'por-capital',
        component: ByCapitalComponent
    },
    {
        path: 'pais/:id',
        component: CountryDetailComponent
    },
    {
        path: '**',
        redirectTo: 'por-pais',
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class CountriesRoutingModule { }
