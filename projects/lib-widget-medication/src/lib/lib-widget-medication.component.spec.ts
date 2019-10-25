import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibWidgetMedicationComponent } from './lib-widget-medication.component';

describe('LibWidgetMedicationComponent', () => {
  let component: LibWidgetMedicationComponent;
  let fixture: ComponentFixture<LibWidgetMedicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibWidgetMedicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibWidgetMedicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
