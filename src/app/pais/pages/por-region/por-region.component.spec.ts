import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PorRegionComponent } from './por-region.component';

describe('PorRegionComponent', () => {
  let component: PorRegionComponent;
  let fixture: ComponentFixture<PorRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorRegionComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
