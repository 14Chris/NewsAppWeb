import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarApplicationComponent } from './navbar-application.component';

describe('NavbarApplicationComponent', () => {
  let component: NavbarApplicationComponent;
  let fixture: ComponentFixture<NavbarApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
