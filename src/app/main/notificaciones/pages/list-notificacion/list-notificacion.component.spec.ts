import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNotificacionComponent } from './list-notificacion.component';

describe('ListNotificacionComponent', () => {
  let component: ListNotificacionComponent;
  let fixture: ComponentFixture<ListNotificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNotificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNotificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
