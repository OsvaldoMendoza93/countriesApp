import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country-interface';
import { CountriesService } from '../../services/countries/countries.service';
import { LocalStorageService } from '../../services/localstorage/local-storage.service';

@Component({
  selector: 'contries-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.scss']
})
export class ByCapitalComponent implements OnInit {
  public initialValue: string = '';
  public countries: Array<Country> = [];

  constructor(
    private countriesService: CountriesService,
  ) { }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore?.byCapital?.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  onSearch(searchTerm: string){
    this.countriesService.getCountriesByCapital(searchTerm).subscribe({
      next: (countries) => {
        this.countries = countries;
      },
      error: (error) => {
        this.countries = [];
      }
    });
  }
}
