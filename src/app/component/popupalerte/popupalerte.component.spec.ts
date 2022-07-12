import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupalerteComponent } from './popupalerte.component';

describe('PopupalerteComponent', () => {
  let component: PopupalerteComponent;
  let fixture: ComponentFixture<PopupalerteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupalerteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupalerteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
