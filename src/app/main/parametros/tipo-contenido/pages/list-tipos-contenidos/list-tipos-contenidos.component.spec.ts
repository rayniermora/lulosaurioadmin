import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTiposContenidosComponent } from './list-tipos-contenidos.component';

describe('ListTiposContenidosComponent', () => {
  let component: ListTiposContenidosComponent;
  let fixture: ComponentFixture<ListTiposContenidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTiposContenidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTiposContenidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
