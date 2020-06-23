import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleguideSampleComponent } from './styleguide-sample.component';

describe('StyleguideSampleComponent', () => {
  let component: StyleguideSampleComponent;
  let fixture: ComponentFixture<StyleguideSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleguideSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleguideSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
