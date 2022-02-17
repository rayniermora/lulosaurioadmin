import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLenguajesComponent } from './list-lenguajes.component';

describe('ListLenguajesComponent', () => {
  let component: ListLenguajesComponent;
  let fixture: ComponentFixture<ListLenguajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLenguajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLenguajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
