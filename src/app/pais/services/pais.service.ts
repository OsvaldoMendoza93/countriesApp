import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/paisesResponse-interface';
import { tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v2';

  get HttpParams(){
    return new HttpParams().set('fields', 'name,capital,alpha2Code,flag,population');
  }

  constructor(
    private http: HttpClient
  ) { }

  buscarPais(query: string): Observable<Array<Country>>{
    return this.http.get<Array<Country>>(`${this.apiUrl}/name/${query}`, {params: this.HttpParams});
  }

  buscarCapital(query: string):Observable<Array<Country>>{
    return this.http.get<Array<Country>>(`${this.apiUrl}/capital/${query}`, {params: this.HttpParams});
  }

  getPaisPorAlpha(id: string):Observable<Country>{
    return this.http.get<Country>(`${this.apiUrl}/alpha/${id}`);
  }

  getPaisesPorRegion(region: string):Observable<Array<Country>>{
    return this.http.get<Array<Country>>(`${this.apiUrl}/regionalbloc/${region}`, {params: this.HttpParams})
      .pipe(
        tap(console.log)
      )
  }
}
