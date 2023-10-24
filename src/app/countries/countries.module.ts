import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';


import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryDetailComponent } from './pages/country-detail/country.detail.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { SearchInputComponent } from './components/search-input/serach-input.component';

@NgModule({
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    CountryDetailComponent,
    CountryTableComponent,
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports:[
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent,
    CountryDetailComponent
  ]
})
export class CountriesModule { }
