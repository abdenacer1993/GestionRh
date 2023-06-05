import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCongieComponent } from './popup-congie.component';

describe('PopupCongieComponent', () => {
  let component: PopupCongieComponent;
  let fixture: ComponentFixture<PopupCongieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupCongieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupCongieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
