import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { BannerModule } from '../../banner/banner.module';
import { ScheduleModule } from '../../schedule/schedule.module';
import { CommonModule, DOCUMENT } from '@angular/common';
import { AboutComponent } from '../../about/about.component';
import { PartnersComponent } from '../../partners/partners.component';
import { VideoComponent } from '../../video/video.component';
import { SpeakersComponponent } from '../../speakers/speakers-desktop/speakers.component';
import { SpeakersTabletComponent } from '../../speakers/speakers-tablet/speakers-tablet.component';
import { SpeakersMobileComponent } from '../../speakers/speakers-mobile/speakers-mobile.component';
import { EventPreviewComponent } from '../../event-preview/event-preview.component';
import { MaintainersComponent } from '../../maintainers/maintainers-mobile/maintainers.component';
import { MaintainersDesktopComponent } from '../../maintainers/maintainers-desktop/maintainers-desktop.component';
import { MaintainersTabletComponenet } from '../../maintainers/maintainers-tablet/maintainers-tablet.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule, 
    BannerModule, 
    ScheduleModule, 
    AboutComponent, 
    PartnersComponent, 
    VideoComponent, 
    SpeakersComponponent,
    SpeakersTabletComponent,
    SpeakersMobileComponent,
    EventPreviewComponent,
    MaintainersComponent,
    MaintainersDesktopComponent,
    MaintainersTabletComponenet
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  

  public tablet = false;
  public mobile = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  public ngOnInit(): void {
    const navBarWidth = (this.document.getElementsByClassName('nav-bar-body')[0] as HTMLElement).offsetWidth;
    if (navBarWidth <= 1024 && navBarWidth > 580) {
      this.tablet = true;
    } else if (navBarWidth <= 580) {
      this.mobile = true;
    }
  }
}
