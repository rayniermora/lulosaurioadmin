import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEtiquetaComponent } from './list-etiqueta.component';

describe('ListEtiquetaComponent', () => {
  let component: ListEtiquetaComponent;
  let fixture: ComponentFixture<ListEtiquetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEtiquetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEtiquetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
