import { Injectable } from '@angular/core';

@Injectable()
export class TemperatureMonitorService {

  constructor() { }

  temps: number[] = [];

  recordTemperature(temp: number) {
    this.temps.splice(this.findPosition(temp), 0, temp);
  }

  findPosition(temp: number): number{
    if(this.temps.length==0){
      return 0;
    }

    let min: number = 0;
    let max: number = this.temps.length-1;
    let current: number = 0;

    while(min<=max){
      current = (min+max)/2 | 0;

      if(this.temps[current] < temp ){
        min = current+1;
      }else if(this.temps[current] > temp ){
        max = current-1;
      }else{
        return current;
      }
    }
    return this.temps[current] < temp ? current+1 : current ;
  }

  getCurrentMedian() : number {
    let l: number = this.temps.length;

    if(l%2 == 0){
      return (this.temps[l/2] + this.temps[l/2-1]) / 2;
    }else{
      return this.temps[ Math.floor(l/2) ];
    }
  }
}
