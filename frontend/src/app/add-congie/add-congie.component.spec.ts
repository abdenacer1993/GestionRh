import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCongieComponent } from './add-congie.component';

describe('AddCongieComponent', () => {
  let component: AddCongieComponent;
  let fixture: ComponentFixture<AddCongieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCongieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCongieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
