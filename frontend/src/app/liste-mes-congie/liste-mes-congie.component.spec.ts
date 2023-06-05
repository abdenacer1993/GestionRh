import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMesCongieComponent } from './liste-mes-congie.component';

describe('ListeMesCongieComponent', () => {
  let component: ListeMesCongieComponent;
  let fixture: ComponentFixture<ListeMesCongieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMesCongieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeMesCongieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
