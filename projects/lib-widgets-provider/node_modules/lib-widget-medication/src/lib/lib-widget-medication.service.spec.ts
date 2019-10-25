import { TestBed } from '@angular/core/testing';

import { LibWidgetMedicationService } from './lib-widget-medication.service';

describe('LibWidgetMedicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibWidgetMedicationService = TestBed.get(LibWidgetMedicationService);
    expect(service).toBeTruthy();
  });
});
