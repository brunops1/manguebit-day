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
    const isDropDown = getComputedStyle((document.getElementsByClassName('list')[0] as HTMLElement), null).position == 'absolute';
  
    if (where == 'about') {
      window.scroll({
        top: bannerHeight + (isDropDown ? -navBarHeight : 0),
        behavior: 'smooth'
      });
    } else if (where == 'schedule') {
      window.scroll({
        top: bannerHeight + aboutHeight + (isDropDown ? -navBarHeight : 0),
        behavior: 'smooth'
      });
    } else {
      window.scroll({
        top: bannerHeight + aboutHeight + scheduleHeight + (isDropDown ? -(navBarHeight*2) : -navBarHeight),
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
    const isDropDown = getComputedStyle((document.getElementsByClassName('list')[0] as HTMLElement), null).position == 'absolute';
    if (isDropDown) {
      (document.getElementsByClassName('list')[0] as HTMLElement).classList.toggle('dropdown-active');
    }
  }
}
