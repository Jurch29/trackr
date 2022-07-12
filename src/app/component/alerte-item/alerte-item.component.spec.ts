import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlerteItemComponent } from './alerte-item.component';

describe('AlerteItemComponent', () => {
  let component: AlerteItemComponent;
  let fixture: ComponentFixture<AlerteItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlerteItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlerteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
