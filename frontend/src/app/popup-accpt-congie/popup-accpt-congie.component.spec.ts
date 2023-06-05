import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAccptCongieComponent } from './popup-accpt-congie.component';

describe('PopupAccptCongieComponent', () => {
  let component: PopupAccptCongieComponent;
  let fixture: ComponentFixture<PopupAccptCongieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupAccptCongieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupAccptCongieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
