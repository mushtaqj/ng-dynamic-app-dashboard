import {Type} from '@angular/core';

// Will wrap the widget component in this and send to the UI
export class WidgetItem {

  constructor(public widgetComponent: Type<any>, public data: any) {
  }
}
