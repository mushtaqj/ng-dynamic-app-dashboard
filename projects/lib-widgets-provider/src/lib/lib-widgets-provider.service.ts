import { Injectable } from '@angular/core';
import {WidgetItem} from './widget-item';
import {LibWidgetMedicationComponent} from 'projects/lib-widget-medication/src/public-api';
import {LibWidgetClinicalparametersComponent} from 'projects/lib-widget-clinicalparameters/src/public-api';

@Injectable({
  providedIn: 'root'
})
export class LibWidgetsProviderService {

  getRegisteredWidgets(): WidgetItem[] {
    return [
      new WidgetItem(LibWidgetMedicationComponent, {title: 'Medication'}),
      new WidgetItem(LibWidgetClinicalparametersComponent, {title: 'Clinical Parameters'})
    ];
  }
}
