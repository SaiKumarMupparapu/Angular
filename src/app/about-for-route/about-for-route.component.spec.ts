import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutForRouteComponent } from './about-for-route.component';

describe('AboutForRouteComponent', () => {
  let component: AboutForRouteComponent;
  let fixture: ComponentFixture<AboutForRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutForRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutForRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
