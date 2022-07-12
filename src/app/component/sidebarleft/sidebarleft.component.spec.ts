import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavleftComponent } from './sidenavleft.component';

describe('SidenavleftComponent', () => {
  let component: SidenavleftComponent;
  let fixture: ComponentFixture<SidenavleftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavleftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
