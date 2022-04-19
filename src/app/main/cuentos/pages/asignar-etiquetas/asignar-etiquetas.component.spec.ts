import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarEtiquetasComponent } from './asignar-etiquetas.component';

describe('AsignarEtiquetasComponent', () => {
  let component: AsignarEtiquetasComponent;
  let fixture: ComponentFixture<AsignarEtiquetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarEtiquetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarEtiquetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
