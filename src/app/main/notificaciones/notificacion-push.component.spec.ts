import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacionPushComponent } from './notificacion-push.component';

describe('NotificacionPushComponent', () => {
  let component: NotificacionPushComponent;
  let fixture: ComponentFixture<NotificacionPushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificacionPushComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacionPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
