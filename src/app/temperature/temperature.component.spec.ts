import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TemperatureComponent } from './temperature.component';
import { TemperatureMonitorService } from '../services/temperature-monitor.service';

describe('TemperatureComponent', () => {
  let component: TemperatureComponent;
  let fixture: ComponentFixture<TemperatureComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ TemperatureComponent ],
      providers: [{ provide: TemperatureMonitorService, useValue: {} }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain input for the temperature', () => {

    expect( fixture.nativeElement.querySelector('input')).toBeTruthy();
  });

  it('should contain a progress bar', () => {
    expect( fixture.nativeElement.querySelector('progressbar')).toBeTruthy();
  });



});
