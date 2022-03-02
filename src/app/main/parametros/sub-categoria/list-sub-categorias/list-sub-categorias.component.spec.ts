import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubCategoriasComponent } from './list-sub-categorias.component';

describe('ListSubCategoriasComponent', () => {
  let component: ListSubCategoriasComponent;
  let fixture: ComponentFixture<ListSubCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSubCategoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
