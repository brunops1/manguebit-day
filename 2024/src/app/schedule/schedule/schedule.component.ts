import { Component } from '@angular/core';
import { scheduleOptions } from '../schedule-options';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss',
  providers: [ScheduleService]
})
export class ScheduleComponent {

  public schedules = scheduleOptions;

  constructor(public readonly scheduleService: ScheduleService) {}

}
