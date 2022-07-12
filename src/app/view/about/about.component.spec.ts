import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AproposViewComponent } from './apropos-view.component';

describe('AproposViewComponent', () => {
  let component: AproposViewComponent;
  let fixture: ComponentFixture<AproposViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AproposViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AproposViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
