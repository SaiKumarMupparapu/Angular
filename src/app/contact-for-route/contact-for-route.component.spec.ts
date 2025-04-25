import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactForRouteComponent } from './contact-for-route.component';

describe('ContactForRouteComponent', () => {
  let component: ContactForRouteComponent;
  let fixture: ComponentFixture<ContactForRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactForRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactForRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
