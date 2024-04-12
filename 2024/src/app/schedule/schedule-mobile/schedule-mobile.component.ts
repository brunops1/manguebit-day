import { Component, OnInit } from '@angular/core';
import { scheduleOptions } from '../schedule-options';

@Component({
  selector: 'app-schedule-mobile',
  templateUrl: './schedule-mobile.component.html',
  styleUrl: './schedule-mobile.component.scss'
})
export class ScheduleMobileComponent implements OnInit {

  public scheduleOptions = scheduleOptions;
  public index = 0;
  public schedule: { title?: string; time?: string; text?: string } = {}

  public ngOnInit(): void {
    if (this.scheduleOptions?.length > 0) {
      this.schedule = this.scheduleOptions[0];
    }
  }

  public shiftLeft(): void {
    if (this.index >= 1) {
      document.getElementsByClassName('cards')[0].classList.toggle('cards-transition');
      document.getElementsByClassName('fake-cards')[0].classList.toggle('cards-shift-right');
      this.index--;
      
      setTimeout(() => {
        this.schedule = this.scheduleOptions[this.index];
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
    if (this.index < this.scheduleOptions.length - 1) {
      document.getElementsByClassName('cards')[0].classList.toggle('cards-transition');
      document.getElementsByClassName('fake-cards')[0].classList.toggle('cards-shift-left');
      this.index++;
      this.schedule = this.scheduleOptions[this.index];
      setTimeout(() => {
        (document.getElementsByClassName('fake-cards')[0] as HTMLElement).style.display = 'none';
        document.getElementsByClassName('fake-cards')[0].classList.toggle('cards-shift-left');
        document.getElementsByClassName('cards')[0].classList.toggle('cards-transition');
        setTimeout(() => {      
            (document.getElementsByClassName('fake-cards')[0] as HTMLElement).style.display = 'flex';
        }, 10);
      }, 100);
    }
  }
}
