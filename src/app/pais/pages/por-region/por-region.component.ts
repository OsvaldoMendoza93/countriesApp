import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paisesResponse-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.scss']
})
export class PorRegionComponent implements OnInit {
  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA' , 'SAARC'];
  /* regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'] */
  regionActiva: string = '';
  paises: Country[] = [];


  constructor(
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
  }

  getClassBtn(region: string){
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region: string){
    if(region === this.regionActiva){return}
    this.regionActiva = region;
    this.paises = [];
    this.paisService.getPaisesPorRegion(this.regionActiva).subscribe({
      next: (paises) => {
        this.paises = paises;
      },
      error: (error) => {
        this.paises = [];
      }
    })
  }


}
