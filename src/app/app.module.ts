import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { TemperatureMonitorService } from './services/temperature-monitor.service';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ TemperatureMonitorService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
