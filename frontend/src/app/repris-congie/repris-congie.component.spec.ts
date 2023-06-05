import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprisCongieComponent } from './repris-congie.component';

describe('ReprisCongieComponent', () => {
  let component: ReprisCongieComponent;
  let fixture: ComponentFixture<ReprisCongieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReprisCongieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReprisCongieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
