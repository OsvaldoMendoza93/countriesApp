import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country-interface';
import { CountriesService } from '../../services/countries/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.scss']
})
export class ByRegionComponent implements OnInit {
  public countries: Array<Country> = [];
  public regions: Array<Region> = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  public selectedRegion?: Region;

  constructor(
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  onSearch(region: Region){ 
    this.selectedRegion = region;
    this.countriesService.getCountriesByRegion(region).subscribe({
      next: (countries) => {
        this.countries = countries;
      },
      error: (error) => {
        this.countries = [];
      }
    })
  }


}
