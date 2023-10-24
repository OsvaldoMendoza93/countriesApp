import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, OnDestroy {
  @Input() public placeholder: string = '';
  @Input() public initialValue: string = '';
  @Output() public onEmitValue: EventEmitter<string> = new EventEmitter();
  @Output() public onDebounce: EventEmitter<string> = new EventEmitter();
  
  public searchTerm: string = '';
  private debouncer: Subject<string> = new Subject();
  private debauncerSubscription?: Subscription;

  constructor() { }

  ngOnInit() {
    this.searchTerm = this.initialValue;
    this.debauncerSubscription = this.debouncer.pipe(
      debounceTime(300)
    ).subscribe({
      next: val => {
        console.log('debouncer', val)
        if(!val){
          console.log('entro');
          return;
        }
        this.onDebounce.emit(val);
      }
    });
  }

  onSearch(){
    this.onEmitValue.emit(this.searchTerm);
  }

  onKeyPress(){
    this.debouncer.next(this.searchTerm);
  }

  ngOnDestroy(){
    this.debauncerSubscription?.unsubscribe();
  }

}
