import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {WidgetItem} from '../../../lib-widgets-provider/src/lib/widget-item';
import {WidgetDirective} from '../../../lib-widgets-provider/src/lib/widget.directive';
import {LibWidgetsProviderService} from '../../../lib-widgets-provider/src/lib/lib-widgets-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Patient Overview';

  widgets: WidgetItem[];

  @ViewChild(WidgetDirective, {static: true}) widgetHost: WidgetDirective;

  constructor(private widgetsService: LibWidgetsProviderService,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  loadWidgets() {
    this.widgets.forEach(widget => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(widget.widgetComponent);
      const componentRef = this.widgetHost.viewContainerRef.createComponent(componentFactory);
    });
  }

  ngOnInit() {
    this.widgets = this.widgetsService.getRegisteredWidgets();
    console.log(this.widgets)
    this.loadWidgets();
  }
}
