import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPageIntroComponent } from './component-page-intro.component';

describe('ComponentPageIntroComponent', () => {
  let component: ComponentPageIntroComponent;
  let fixture: ComponentFixture<ComponentPageIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentPageIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentPageIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
