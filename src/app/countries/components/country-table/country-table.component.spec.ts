import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryTableComponent } from './country-table.component';

describe('CountryTableComponent', () => {
  let component: CountryTableComponent;
  let fixture: ComponentFixture<CountryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 /*  it('tests custom', () => {
    fixture = TestBed.createComponent(CountryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const res = 8
    const resFuction = component.sumar()
    expect(resFuction).toEqual(res)
  }) */

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
