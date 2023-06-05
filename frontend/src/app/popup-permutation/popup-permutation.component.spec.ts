import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPermutationComponent } from './popup-permutation.component';

describe('PopupPermutationComponent', () => {
  let component: PopupPermutationComponent;
  let fixture: ComponentFixture<PopupPermutationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupPermutationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupPermutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
