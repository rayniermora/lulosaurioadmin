import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTipoContenidoComponent } from './form-tipo-contenido.component';

describe('FormTipoContenidoComponent', () => {
  let component: FormTipoContenidoComponent;
  let fixture: ComponentFixture<FormTipoContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTipoContenidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTipoContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
