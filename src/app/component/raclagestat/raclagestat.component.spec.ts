import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaclagestatComponent } from './raclagestat.component';

describe('RaclagestatComponent', () => {
  let component: RaclagestatComponent;
  let fixture: ComponentFixture<RaclagestatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaclagestatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaclagestatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
