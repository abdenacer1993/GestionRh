import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesRepriseComponent } from './mes-reprise.component';

describe('MesRepriseComponent', () => {
  let component: MesRepriseComponent;
  let fixture: ComponentFixture<MesRepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesRepriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesRepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
