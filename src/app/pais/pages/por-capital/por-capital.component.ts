import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paisesResponse-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.scss']
})
export class PorCapitalComponent implements OnInit {
  termino: string = '';
  hayError: boolean = false;

  paises: Country[] = [];

  constructor(
    private paisSservice: PaisService
  ) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.paisSservice.buscarCapital(this.termino).subscribe({
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
}
