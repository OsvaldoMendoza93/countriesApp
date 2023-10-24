import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Country } from '../../interfaces/country-interface';
import { CacheStore } from '../../interfaces/cache-store.interface';
import { Region } from '../../interfaces/region.type';
import { LocalStorageService } from '../localstorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  public cacheStore: CacheStore  = {
    byCountries: {term: '', countries: []},
    byCapital: {term: '', countries: []},
    byRegion: {region: '' , countries:[]}
  }

  constructor(
    private http: HttpClient, 
    private localStorageService: LocalStorageService
  ) { 
    if(!localStorageService.getData('cacheStore')) return
    this.cacheStore = this.localStorageService.getData('cacheStore')
  }

  private getCountriesRequest(url: string): Observable<Array<Country>>{
    return this.http.get<Array<Country>>(url).pipe(
      catchError( () => of([]))
    );
  }

  public getCountries(term: string): Observable<Array<Country>>{
    return this.getCountriesRequest(`${this.apiUrl}/name/${term}`).pipe(
      tap(countries => this.cacheStore.byCountries = {term, countries} ),
      tap( () => this.localStorageService.saveData('cacheStore', JSON.stringify(this.cacheStore)))
    );
  }

  public getCountriesByCapital(term: string):Observable<Array<Country>>{
    return this.getCountriesRequest(`${this.apiUrl}/capital/${term}`).pipe(
      tap(countries => this.cacheStore.byCapital = {term, countries} ),
      tap( () => this.localStorageService.saveData('cacheStore', JSON.stringify(this.cacheStore)))
    )
  }

  
  public getCountriesByRegion(region: Region):Observable<Array<Country>>{
    return this.getCountriesRequest(`${this.apiUrl}/region/${region}`).pipe(
      tap(countries => this.cacheStore.byRegion = {region, countries} ),
      tap( () => this.localStorageService.saveData('cacheStore', JSON.stringify(this.cacheStore)))
    )
  }

  public getCountryByAlphaCode(id: string):Observable<Country | null>{
    return this.http.get<Array<Country>>(`${this.apiUrl}/alpha/${id}`)
    .pipe(
      map(countries => countries.length > 0 ? countries[0] : null),
      catchError( () => of(null))
    );
  }
}
