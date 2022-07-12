import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteelevageComponent } from './carteelevage.component';

describe('CarteelevageComponent', () => {
  let component: CarteelevageComponent;
  let fixture: ComponentFixture<CarteelevageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteelevageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteelevageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
