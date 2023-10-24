import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ByCapitalComponent } from './by-capital.component';

describe('ByCapitalComponent', () => {
  let component: ByCapitalComponent;
  let fixture: ComponentFixture<ByCapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByCapitalComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
