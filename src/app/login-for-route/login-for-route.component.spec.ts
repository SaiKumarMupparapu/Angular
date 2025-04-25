import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginForRouteComponent } from './login-for-route.component';

describe('LoginForRouteComponent', () => {
  let component: LoginForRouteComponent;
  let fixture: ComponentFixture<LoginForRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginForRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginForRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
