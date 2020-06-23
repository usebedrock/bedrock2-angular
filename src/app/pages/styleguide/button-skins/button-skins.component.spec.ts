import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSkinsComponent } from './button-skins.component';

describe('ButtonSkinsComponent', () => {
  let component: ButtonSkinsComponent;
  let fixture: ComponentFixture<ButtonSkinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonSkinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSkinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
