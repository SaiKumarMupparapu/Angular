import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicStylelingComponent } from './dynamic-styleling.component';

describe('DynamicStylelingComponent', () => {
  let component: DynamicStylelingComponent;
  let fixture: ComponentFixture<DynamicStylelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicStylelingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicStylelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
