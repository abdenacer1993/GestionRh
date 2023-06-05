import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupInsritFormationComponent } from './popup-insrit-formation.component';

describe('PopupInsritFormationComponent', () => {
  let component: PopupInsritFormationComponent;
  let fixture: ComponentFixture<PopupInsritFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupInsritFormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupInsritFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
