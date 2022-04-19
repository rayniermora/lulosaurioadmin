import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSuscriptoresComponent } from './list-suscriptores.component';

describe('ListSuscriptoresComponent', () => {
  let component: ListSuscriptoresComponent;
  let fixture: ComponentFixture<ListSuscriptoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSuscriptoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSuscriptoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
