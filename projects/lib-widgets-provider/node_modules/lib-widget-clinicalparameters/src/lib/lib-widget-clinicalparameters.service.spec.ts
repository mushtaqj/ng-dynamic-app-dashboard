import { TestBed } from '@angular/core/testing';

import { LibWidgetClinicalparametersService } from './lib-widget-clinicalparameters.service';

describe('LibWidgetClinicalparametersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibWidgetClinicalparametersService = TestBed.get(LibWidgetClinicalparametersService);
    expect(service).toBeTruthy();
  });
});
