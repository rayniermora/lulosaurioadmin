import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategoriaHijaComponent } from './list-categoria-hija.component';

describe('ListCategoriaHijaComponent', () => {
  let component: ListCategoriaHijaComponent;
  let fixture: ComponentFixture<ListCategoriaHijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCategoriaHijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCategoriaHijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
