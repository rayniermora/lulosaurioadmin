import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTipoSuscripcionComponent } from './form-tipo-suscripcion.component';

describe('FormTipoSuscripcionComponent', () => {
  let component: FormTipoSuscripcionComponent;
  let fixture: ComponentFixture<FormTipoSuscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTipoSuscripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTipoSuscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
