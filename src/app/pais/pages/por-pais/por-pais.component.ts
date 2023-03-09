import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paisesResponse-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss']
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  mostrarSugerencias = false;
  paisesSugeridos : Country[] = [];

  constructor(
    private paisSservice: PaisService
  ) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;
    this.paisSservice.buscarPais(this.termino).subscribe({
        next: res => {
          this.paises = res;
        },
        error: error => {
          this.hayError = true;
          this.paises = [];
        }
      }
    )
  }

  sugerencias(termino: string){
    this.mostrarSugerencias = true;
    this.hayError = false;
    this.termino = termino
    this.paisSservice.buscarPais(this.termino).subscribe({ 
        next: paises =>{
          this.paisesSugeridos = paises.splice(0,5)
        },
        error: error => {
          this.paisesSugeridos = [];
        }
      }
    )
  }

  buscarSeguerido(termino: string){
    this.buscar(termino)
  }

}
