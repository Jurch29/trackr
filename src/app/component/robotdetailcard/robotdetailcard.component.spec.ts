import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotdetailcardComponent } from './robotdetailcard.component';

describe('RobotdetailcardComponent', () => {
  let component: RobotdetailcardComponent;
  let fixture: ComponentFixture<RobotdetailcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotdetailcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotdetailcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
