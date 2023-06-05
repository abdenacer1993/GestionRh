import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDemenagmentComponent } from './add-demenagment.component';

describe('AddDemenagmentComponent', () => {
  let component: AddDemenagmentComponent;
  let fixture: ComponentFixture<AddDemenagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDemenagmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDemenagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
