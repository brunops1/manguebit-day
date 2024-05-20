import { Component, OnInit } from '@angular/core';
import { scheduleOptions } from '../schedule-options';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-schedule-tablet',
  templateUrl: './schedule-tablet.component.html',
  styleUrl: './schedule-tablet.component.scss',
  providers: [ScheduleService]
})
export class ScheduleTabletComponent implements OnInit {

  public scheduleOptions = scheduleOptions;
  public schedulePair: { first?: { title: string; time: string; text: string }, second?: { title: string; time: string; text: string } } = {};
  public index = 0;

  constructor(public readonly scheduleService: ScheduleService) {}
  
  public ngOnInit(): void {
    if (this.index <= this.scheduleOptions.length - 2) {
      this.schedulePair.first = this.scheduleOptions[this.index];
      this.schedulePair.second = this.scheduleOptions[this.index + 1];
    } else if (this.index <= this.scheduleOptions.length - 1) {
      this.schedulePair.first = this.scheduleOptions[this.index];
    }
  }

  public shiftLeft(): void {
    document.getElementsByClassName('cards')[0].classList.toggle('cards-transition');
    this.index -= 2;

    setTimeout(() => {
      if (this.index < 0) {
        if (-this.index % 2 == 0) {
          this.index = this.scheduleOptions.length - 2;
          this.schedulePair.first = this.scheduleOptions[this.index];
          this.schedulePair.second = this.scheduleOptions[this.index + 1];
        } else {
          this.index = this.scheduleOptions.length - 1;
          this.schedulePair.first = this.scheduleOptions[this.index];
          this.schedulePair.second = this.scheduleOptions[0];
        }
      } else {
        this.schedulePair.first = this.scheduleOptions[this.index];
        this.schedulePair.second = this.scheduleOptions[this.index + 1];
      }
      document.getElementsByClassName('cards')[0].classList.toggle('cards-transition');
    }, 100);

  }

  public shiftRight(): void {
    document.getElementsByClassName('cards')[0].classList.toggle('cards-transition');
      this.index += 2;
      
      setTimeout(() => {
        if (this.index > this.scheduleOptions.length - 1) {
            this.index = 0;   
        }
        this.schedulePair.first = this.scheduleOptions[this.index];
        this.schedulePair.second = this.scheduleOptions[this.index + 1];
        document.getElementsByClassName('cards')[0].classList.toggle('cards-transition');
    }, 100);
  }
}
