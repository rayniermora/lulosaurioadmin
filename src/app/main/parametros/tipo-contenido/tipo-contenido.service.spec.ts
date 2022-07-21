import { TestBed } from '@angular/core/testing';

import { TipoContenidoService } from '../../../services/tipo-contenido.service';

describe('TipoContenidoService', () => {
  let service: TipoContenidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoContenidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
