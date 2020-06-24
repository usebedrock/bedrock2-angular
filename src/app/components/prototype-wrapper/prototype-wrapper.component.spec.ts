import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrototypeWrapperComponent } from './prototype-wrapper.component';

describe('PrototypeWrapperComponent', () => {
  let component: PrototypeWrapperComponent;
  let fixture: ComponentFixture<PrototypeWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrototypeWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrototypeWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
