import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrobotComponent } from './editrobot.component';

describe('EditrobotComponent', () => {
  let component: EditrobotComponent;
  let fixture: ComponentFixture<EditrobotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditrobotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditrobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
