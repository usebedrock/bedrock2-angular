import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleThreeComponent } from './module-three.component';

describe('ModuleThreeComponent', () => {
  let component: ModuleThreeComponent;
  let fixture: ComponentFixture<ModuleThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
