import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarCategoriasHijasComponent } from './asignar-categorias-hijas.component';

describe('AsignarCategoriasHijasComponent', () => {
  let component: AsignarCategoriasHijasComponent;
  let fixture: ComponentFixture<AsignarCategoriasHijasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarCategoriasHijasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarCategoriasHijasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
