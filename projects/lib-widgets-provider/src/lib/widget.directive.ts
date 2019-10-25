import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[libWidgetHost]'
})
export class WidgetDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
