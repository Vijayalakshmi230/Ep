import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarHome } from './navbar-home';

describe('NavbarHome', () => {
  let component: NavbarHome;
  let fixture: ComponentFixture<NavbarHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
