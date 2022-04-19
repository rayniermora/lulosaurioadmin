import { TestBed } from '@angular/core/testing';

import { TipoSuscripcionService } from './tipo-suscripcion.service';

describe('TipoSuscripcionService', () => {
  let service: TipoSuscripcionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoSuscripcionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
