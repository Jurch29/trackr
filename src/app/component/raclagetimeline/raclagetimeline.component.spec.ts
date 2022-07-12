import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaclagetimelineComponent } from './raclagetimeline.component';

describe('RaclagetimelineComponent', () => {
  let component: RaclagetimelineComponent;
  let fixture: ComponentFixture<RaclagetimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaclagetimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaclagetimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
