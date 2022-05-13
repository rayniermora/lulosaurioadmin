import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCuentoComponent } from './edit-cuento.component';

describe('EditCuentoComponent', () => {
  let component: EditCuentoComponent;
  let fixture: ComponentFixture<EditCuentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCuentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCuentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
