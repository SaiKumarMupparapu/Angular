import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextualVariablesComponent } from './contextual-variables.component';

describe('ContextualVariablesComponent', () => {
  let component: ContextualVariablesComponent;
  let fixture: ComponentFixture<ContextualVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContextualVariablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContextualVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
