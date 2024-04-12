import { Component } from '@angular/core';
import { scheduleOptions } from '../schedule-options';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent {

  public schedules = scheduleOptions;


}
