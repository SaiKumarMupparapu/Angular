import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFeidComponent } from './input-feid.component';

describe('InputFeidComponent', () => {
  let component: InputFeidComponent;
  let fixture: ComponentFixture<InputFeidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputFeidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFeidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
