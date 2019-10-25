import {NgModule} from '@angular/core';
import {WidgetDirective} from './widget.directive';
import {WidgetItem} from './widget-item';
import {LibWidgetMedicationModule} from 'projects/lib-widget-medication/src/public-api';
import {LibWidgetClinicalparametersModule} from 'projects/lib-widget-clinicalparameters/src/public-api';


@NgModule({
  declarations: [WidgetDirective],
  imports: [
    LibWidgetMedicationModule,
    LibWidgetClinicalparametersModule
  ],
  exports: [WidgetDirective]
})
export class LibWidgetsProviderModule {
}
