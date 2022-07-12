import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditraclageComponent } from './editraclage.component';

describe('EditraclageComponent', () => {
  let component: EditraclageComponent;
  let fixture: ComponentFixture<EditraclageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditraclageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditraclageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
