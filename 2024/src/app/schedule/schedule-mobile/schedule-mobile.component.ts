import { Component, OnInit } from '@angular/core';
import { scheduleOptions } from '../schedule-options';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-schedule-mobile',
  templateUrl: './schedule-mobile.component.html',
  styleUrl: './schedule-mobile.component.scss',
  providers: [ScheduleService]
})
export class ScheduleMobileComponent implements OnInit {

  public scheduleOptions = scheduleOptions;
  public index = 0;
  public schedule: { title?: string; time?: string; text?: string } = {}
  public comingSoon = true;

  constructor (public readonly scheduleService: ScheduleService) {}

  public ngOnInit(): void {
    if (this.scheduleOptions?.length > 0) {
      this.schedule = this.scheduleOptions[0];
    }
  }

  public shiftLeft(): void {
      document.getElementsByClassName('cards')[0].classList.toggle('cards-transition');
      this.index--;
      
      setTimeout(() => {
        if (this.index < 0) {
          this.index = this.scheduleOptions.length - 1;
        } 
        this.schedule = this.scheduleOptions[this.index];
        document.getElementsByClassName('cards')[0].classList.toggle('cards-transition');
      }, 100);
   
  }

  public shiftRight(): void {
    document.getElementsByClassName('cards')[0].classList.toggle('cards-transition');
    this.index++;
    
    setTimeout(() => {
      if (this.index > this.scheduleOptions.length - 1) {
          this.index = 0;   
      }
      this.schedule = this.scheduleOptions[this.index];
      document.getElementsByClassName('cards')[0].classList.toggle('cards-transition');
    }, 100);
    
  }
}
