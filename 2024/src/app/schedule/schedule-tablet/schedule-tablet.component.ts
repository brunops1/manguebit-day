import { Component, OnInit } from '@angular/core';
import { scheduleOptions } from '../schedule-options';

@Component({
  selector: 'app-schedule-tablet',
  templateUrl: './schedule-tablet.component.html',
  styleUrl: './schedule-tablet.component.scss'
})
export class ScheduleTabletComponent implements OnInit {

  public scheduleOptions = scheduleOptions;
  public schedulePair: { first?: { title: string; time: string; text: string }, second?: { title: string; time: string; text: string } } = {};
  public index = 0;
  
  public ngOnInit(): void {
    if (this.index <= this.scheduleOptions.length - 2) {
      this.schedulePair.first = this.scheduleOptions[this.index];
      this.schedulePair.second = this.scheduleOptions[this.index + 1];
    } else if (this.index <= this.scheduleOptions.length - 1) {
      this.schedulePair.first = this.scheduleOptions[this.index];
    }
  }

  public shiftLeft(): void {
    if (this.index >= 2) {
      document.getElementsByClassName('cards')[0].classList.toggle('cards-transition');
      document.getElementsByClassName('fake-cards')[0].classList.toggle('cards-shift-right');
      this.index -= 2;
      
      setTimeout(() => {
        this.schedulePair.first = this.scheduleOptions[this.index];
        this.schedulePair.second = this.scheduleOptions[this.index + 1];
        (document.getElementsByClassName('fake-cards')[0] as HTMLElement).style.display = 'none';
        document.getElementsByClassName('fake-cards')[0].classList.toggle('cards-shift-right');
        document.getElementsByClassName('cards')[0].classList.toggle('cards-transition');
        setTimeout(() => {      
            (document.getElementsByClassName('fake-cards')[0] as HTMLElement).style.display = 'flex';
        }, 10);
      }, 100);
    }
  }

  public shiftRight(): void {
    if (this.index <= this.scheduleOptions.length - 2) {
      document.getElementsByClassName('cards')[0].classList.toggle('cards-transition');
      document.getElementsByClassName('fake-cards')[0].classList.toggle('cards-shift-left');
      this.index += 2;
      this.schedulePair.first = this.scheduleOptions[this.index];
      this.schedulePair.second = this.scheduleOptions[this.index + 1];
      setTimeout(() => {
        (document.getElementsByClassName('fake-cards')[0] as HTMLElement).style.display = 'none';
        document.getElementsByClassName('fake-cards')[0].classList.toggle('cards-shift-left');
        document.getElementsByClassName('cards')[0].classList.toggle('cards-transition');
        setTimeout(() => {      
            (document.getElementsByClassName('fake-cards')[0] as HTMLElement).style.display = 'flex';
        }, 10);
      }, 100);
    } else if (this.index <= this.scheduleOptions.length - 1) {
      this.schedulePair.first = this.scheduleOptions[this.index];
      delete this.schedulePair.second;
    }
  }
}
