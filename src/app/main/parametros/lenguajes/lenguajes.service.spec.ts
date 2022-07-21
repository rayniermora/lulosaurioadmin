import { TestBed } from '@angular/core/testing';

import { LenguajesService } from '../../../services/lenguajes.service';

describe('LenguajesService', () => {
  let service: LenguajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LenguajesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
