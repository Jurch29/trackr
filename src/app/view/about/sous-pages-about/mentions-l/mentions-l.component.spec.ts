import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentionsLComponent } from './mentions-l.component';

describe('MentionsLComponent', () => {
  let component: MentionsLComponent;
  let fixture: ComponentFixture<MentionsLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentionsLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentionsLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
