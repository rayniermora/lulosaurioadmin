import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLenguajesComponent } from './form-lenguajes.component';

describe('FormLenguajesComponent', () => {
  let component: FormLenguajesComponent;
  let fixture: ComponentFixture<FormLenguajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLenguajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLenguajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
