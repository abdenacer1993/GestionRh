import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePermutationComponent } from './liste-permutation.component';

describe('ListePermutationComponent', () => {
  let component: ListePermutationComponent;
  let fixture: ComponentFixture<ListePermutationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePermutationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListePermutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
