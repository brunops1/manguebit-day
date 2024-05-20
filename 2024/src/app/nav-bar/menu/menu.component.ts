import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuButtonComponent {



  public scrollDown(where: string): void {
    const bannerHeight = (document.getElementsByClassName('banner-image')[0] as HTMLElement).offsetHeight;
    const aboutHeight = (document.getElementsByClassName('about-body')[0] as HTMLElement).offsetHeight;
    const scheduleHeight = (document.getElementsByClassName('schedule-body')[0] as HTMLElement).offsetHeight;
    const navBarHeight = (document.getElementsByClassName('nav-bar-body')[0] as HTMLElement)?.offsetHeight;
    const videoHeight = (document.getElementsByClassName('video-body')[0] as HTMLElement).offsetHeight;
    const speakersHeight = (document.getElementsByClassName('speakers-body')[0] as HTMLElement).offsetHeight;
    const eventHeight = (document.getElementsByClassName('preview-background')[0] as HTMLElement).offsetHeight;
    const partnersHeight = (document.getElementsByClassName('partners-body')[0] as HTMLElement).offsetHeight;
    const isMobile = (document.getElementsByClassName('nav-bar-body')[0] as HTMLElement).offsetWidth <= 580;

    if (where == 'about') {
      window.scroll({
        top: bannerHeight + (isMobile ? -navBarHeight : 0),
        behavior: 'smooth'
      });
    } else if (where == 'schedule') {
      window.scroll({
        top: bannerHeight + aboutHeight + videoHeight + speakersHeight + (isMobile ? -navBarHeight : 0),
        behavior: 'smooth'
      });
    } else if (where == 'video') {
      window.scroll({
        top: bannerHeight + aboutHeight + (isMobile ? -navBarHeight : 0),
        behavior: 'smooth'
      });
    } else if (where == 'palestrantes') {
      window.scroll({
        top: bannerHeight + aboutHeight + videoHeight + (isMobile ? -navBarHeight : 0),
        behavior: 'smooth'
      });
    } else if (where == 'event') {
      window.scroll({
        top: bannerHeight + aboutHeight + videoHeight + speakersHeight + scheduleHeight + (isMobile ? -navBarHeight : 0),
        behavior: 'smooth'
      });
    } else if (where == 'maintainers') {
      window.scroll({
        top: bannerHeight + aboutHeight + videoHeight + speakersHeight + scheduleHeight + eventHeight + partnersHeight + (isMobile ? -navBarHeight : 0),
        behavior: 'smooth'
      });
    } else {
      window.scroll({
        top: bannerHeight + aboutHeight + videoHeight + speakersHeight + scheduleHeight + eventHeight + (isMobile ? -(navBarHeight*2) : 0),
        behavior: 'smooth'
      });
    }

    this.openDropdownMenu();
  }

  public goToUrl(url: string): void {
    this.openDropdownMenu();
    window.open(url, '_blank');
  }

  public openDropdownMenu(): void {
    const isMobile = getComputedStyle((document.getElementsByClassName('list')[0] as HTMLElement), null).position == 'absolute';
    if (isMobile) {
      (document.getElementsByClassName('list')[0] as HTMLElement).classList.toggle('dropdown-active');
    }
  }
}
