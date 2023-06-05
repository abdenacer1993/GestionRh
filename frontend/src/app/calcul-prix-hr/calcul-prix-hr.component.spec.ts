import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculPrixHrComponent } from './calcul-prix-hr.component';

describe('CalculPrixHrComponent', () => {
  let component: CalculPrixHrComponent;
  let fixture: ComponentFixture<CalculPrixHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculPrixHrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculPrixHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
