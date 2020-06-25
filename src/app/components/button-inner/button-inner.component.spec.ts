import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonInnerComponent } from './button-inner.component';

describe('ButtonInnerComponent', () => {
  let component: ButtonInnerComponent;
  let fixture: ComponentFixture<ButtonInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
