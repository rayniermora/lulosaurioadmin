import { TestBed } from '@angular/core/testing';

import { CategoriaHijaService } from '../../../services/categoria-hija.service';

describe('CategoriaHijaService', () => {
  let service: CategoriaHijaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriaHijaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
