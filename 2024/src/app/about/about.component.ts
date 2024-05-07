import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  public mobile = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  public ngOnInit(): void {
    const navBarWidth = (this.document.getElementsByClassName('nav-bar-body')[0] as HTMLElement).offsetWidth;
    if (navBarWidth <= 1024) {
      this.mobile= true;
    }
  }

  public goToLink(url: string): void {
    window.open(url, '_blank');
  }
}
