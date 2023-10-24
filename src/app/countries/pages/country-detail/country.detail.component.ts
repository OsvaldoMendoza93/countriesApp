import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ChildActivationStart, Router } from '@angular/router';
import { switchMap,tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country-interface';
import { CountriesService } from '../../services/countries/countries.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
  public country!: Country

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.countriesService.getCountryByAlphaCode(id) ),
      tap( console.log )
    )
    .subscribe( country => {
      if(!country) this.router.navigateByUrl('');
      this.country = country;
    });
  }

}
