import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddraclageComponent } from './addraclage.component';

describe('AddraclageComponent', () => {
  let component: AddraclageComponent;
  let fixture: ComponentFixture<AddraclageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddraclageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddraclageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
