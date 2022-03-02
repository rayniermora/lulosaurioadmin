import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCuentosComponent } from './list-cuentos.component';

describe('ListCuentosComponent', () => {
  let component: ListCuentosComponent;
  let fixture: ComponentFixture<ListCuentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCuentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCuentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
