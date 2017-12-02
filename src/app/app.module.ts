import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { TemperatureMonitorService } from './temperature-monitor.service';

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
