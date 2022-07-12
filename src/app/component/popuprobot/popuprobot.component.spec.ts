import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopuprobotComponent } from './popuprobot.component';

describe('PopuprobotComponent', () => {
  let component: PopuprobotComponent;
  let fixture: ComponentFixture<PopuprobotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopuprobotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopuprobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
