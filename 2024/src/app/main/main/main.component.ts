import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { BannerModule } from '../../banner/banner.module';
import { ScheduleModule } from '../../schedule/schedule.module';
import { CommonModule, DOCUMENT } from '@angular/common';
import { AboutComponent } from '../../about/about.component';
import { PartnersComponent } from '../../partners/partners.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, BannerModule, ScheduleModule, AboutComponent, PartnersComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  

  public tablet = false;
  public mobile = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  public ngOnInit(): void {
    const navBarWidth = (this.document.getElementsByClassName('nav-bar-body')[0] as HTMLElement).offsetWidth;
    if (navBarWidth <= 1024 && navBarWidth > 450) {
      this.tablet = true;
    } else if (navBarWidth <= 450) {
      this.mobile = true;
    }
  }
}
