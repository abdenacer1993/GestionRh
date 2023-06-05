import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonnerNbrHComponent } from './donner-nbr-h.component';

describe('DonnerNbrHComponent', () => {
  let component: DonnerNbrHComponent;
  let fixture: ComponentFixture<DonnerNbrHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonnerNbrHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonnerNbrHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
