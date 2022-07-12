import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaclViewComponent } from './racl-view.component';

describe('RaclViewComponent', () => {
  let component: RaclViewComponent;
  let fixture: ComponentFixture<RaclViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaclViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaclViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
