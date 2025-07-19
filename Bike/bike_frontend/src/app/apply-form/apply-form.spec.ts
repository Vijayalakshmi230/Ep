import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForm } from './apply-form';

describe('ApplyForm', () => {
  let component: ApplyForm;
  let fixture: ComponentFixture<ApplyForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplyForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
