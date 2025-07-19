import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBikes } from './display-bikes';

describe('DisplayBikes', () => {
  let component: DisplayBikes;
  let fixture: ComponentFixture<DisplayBikes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayBikes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayBikes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
