import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country-interface';
import { CountriesService } from '../../services/countries/countries.service';
import { CountriesModule } from '../../countries.module';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.scss']
})
export class ByCountryComponent implements OnInit {
  public initialValue: string = '';
  public countries: Array<Country> = [];
  public isLoading: boolean = false;

  /* Variables para lista de sugerencias */
  public showSuggested:boolean = false;
  public suggestedCountries: Country[] = [];

  constructor(
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }

  onSearch(searchTerm: string){
    this.isLoading = true;
    this.showSuggested = false;
    this.countriesService.getCountries(searchTerm).subscribe({
      next: (countries) => {
        this.isLoading = false;
        this.countries = countries;
      },
      error: (error) => {
        this.countries = [];
      }
    })
  }
  
  /* Mostrar un lista de  sugerncias*/
  suggestedSearch(searchTerm: string){
    this.showSuggested = true;
    this.countriesService.getCountries(searchTerm).subscribe({
      next: (countries) => {
        this.suggestedCountries = countries;
      },
      error: (error) => {
        this.suggestedCountries = [];
      }
    });
  }

  buscarSeguerido(termino: string){
    this.onSearch(termino);
  }

}
