import { Component, OnInit } from '@angular/core';
import { TemperatureMonitorService } from '../temperature-monitor.service';


@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {
  temp: String = "";
  median: number;
  progress: number = 0;
  currentLength: number;
  maxArrayLength: number = 8;
  more: boolean = true;
  valid: boolean = true;

  constructor(private tempService: TemperatureMonitorService) { }

  ngOnInit() {
  }

  isValid(): boolean {
    return (!Number.isNaN(Number(this.temp)) || this.temp=="");
  }

  isActive(): boolean {
    return this.more && this.isValid();
  }

  recordTemperature() {
    if(this.isActive()){
      console.log("temperature submitted " + this.temp);
      this.tempService.recordTemperature(Number(this.temp));
      this.median = this.tempService.getCurrentMedian();
      this.temp = "";
      this.currentLength = this.tempService.temps.length;
      this.progress = (this.tempService.temps.length / this.maxArrayLength)*100;

      if(this.currentLength>=this.maxArrayLength){
        this.more=false;
      }

    }
  }



}
