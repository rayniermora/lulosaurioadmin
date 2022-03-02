import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCategoriaHijaComponent } from './form-categoria-hija.component';

describe('FormCategoriaHijaComponent', () => {
  let component: FormCategoriaHijaComponent;
  let fixture: ComponentFixture<FormCategoriaHijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCategoriaHijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCategoriaHijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
