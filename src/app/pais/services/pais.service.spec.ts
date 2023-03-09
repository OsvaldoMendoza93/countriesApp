import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PaisService } from './pais.service';

describe('PaisService', () => {
  let service: PaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(PaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
