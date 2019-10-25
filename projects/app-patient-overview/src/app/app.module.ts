import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LibWidgetsProviderModule} from '../../../lib-widgets-provider/src/lib/lib-widgets-provider.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibWidgetsProviderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
