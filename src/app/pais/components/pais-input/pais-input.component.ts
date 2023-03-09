import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.scss']
})
export class PaisInputComponent implements OnInit {
  @Input() placeholder: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  
  termino: string = '';
  debouncer: Subject<string> = new Subject();

  constructor() { }

  ngOnInit() {
    this.debouncer.pipe(
      debounceTime(300)
    ).subscribe({
      next: val => {
        console.log('debouncer', val)
        if(!val){
          return
        }
        this.onDebounce.emit(val)
      }
    });
  }

  buscar(){
    this.onEnter.emit(this.termino)
  }

  teclaPresionada(){
    this.debouncer.next(this.termino)
  }

}
