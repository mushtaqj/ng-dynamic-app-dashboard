import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibWidgetClinicalparametersComponent } from './lib-widget-clinicalparameters.component';

describe('LibWidgetClinicalparametersComponent', () => {
  let component: LibWidgetClinicalparametersComponent;
  let fixture: ComponentFixture<LibWidgetClinicalparametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibWidgetClinicalparametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibWidgetClinicalparametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
