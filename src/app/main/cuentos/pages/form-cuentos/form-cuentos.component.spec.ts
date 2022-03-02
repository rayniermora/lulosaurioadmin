import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCuentosComponent } from './form-cuentos.component';

describe('FormCuentosComponent', () => {
  let component: FormCuentosComponent;
  let fixture: ComponentFixture<FormCuentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCuentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCuentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
