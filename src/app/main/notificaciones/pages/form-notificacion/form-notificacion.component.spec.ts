import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNotificacionComponent } from './form-notificacion.component';

describe('FormNotificacionComponent', () => {
  let component: FormNotificacionComponent;
  let fixture: ComponentFixture<FormNotificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNotificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNotificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
