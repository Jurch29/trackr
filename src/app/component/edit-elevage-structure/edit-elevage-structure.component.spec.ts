import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditElevageStructureComponent } from './edit-elevage-structure.component';

describe('EditElevageStructureComponent', () => {
  let component: EditElevageStructureComponent;
  let fixture: ComponentFixture<EditElevageStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditElevageStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditElevageStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
