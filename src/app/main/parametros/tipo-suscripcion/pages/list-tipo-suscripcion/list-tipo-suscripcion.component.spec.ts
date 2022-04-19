import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTipoSuscripcionComponent } from './list-tipo-suscripcion.component';

describe('ListTipoSuscripcionComponent', () => {
  let component: ListTipoSuscripcionComponent;
  let fixture: ComponentFixture<ListTipoSuscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTipoSuscripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTipoSuscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
