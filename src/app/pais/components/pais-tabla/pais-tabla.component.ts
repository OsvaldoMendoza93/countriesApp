import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paisesResponse-interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.scss']
})
export class PaisTablaComponent implements OnInit {
  @Input() paises: Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}