import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptCongieComponent } from './accept-congie.component';

describe('AcceptCongieComponent', () => {
  let component: AcceptCongieComponent;
  let fixture: ComponentFixture<AcceptCongieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptCongieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptCongieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
