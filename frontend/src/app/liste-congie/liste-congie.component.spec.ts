import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCongieComponent } from './liste-congie.component';

describe('ListeCongieComponent', () => {
  let component: ListeCongieComponent;
  let fixture: ComponentFixture<ListeCongieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCongieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeCongieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
