import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEmp } from './display-emp';

describe('DisplayEmp', () => {
  let component: DisplayEmp;
  let fixture: ComponentFixture<DisplayEmp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayEmp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayEmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
