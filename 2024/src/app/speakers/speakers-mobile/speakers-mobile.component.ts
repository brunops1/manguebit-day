import { Component, OnInit } from "@angular/core";
import { speakersOptions } from "../speakers.options";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";

@Component({
    selector: 'app-speakers-mobile',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './speakers-mobile.component.html',
    styleUrls: ['./speakers-mobile.component.scss']
})
export class SpeakersMobileComponent implements OnInit {

    public index = 0;
    public speakers = speakersOptions;
    public speaker: { name?: string; role?: string; image_address?: string, pallet?: string[], icon_set?: string[] } = {};  

    public clientXonMouseDown = 0;

    constructor(private readonly router: Router) {}

    public ngOnInit(): void {
        if (this.speakers?.length > 0) {
          this.speaker = this.speakers[0];
        }
      }
    
      public shiftLeft(): void {
          document.getElementsByClassName('speakers-cards')[0].classList.toggle('cards-transition');
          this.index--;
          if (this.index < 0) {
            this.index = this.speakers.length - 1;
          }
          
          setTimeout(() => {
            this.speaker = this.speakers[this.index];
            document.getElementsByClassName('speakers-cards')[0].classList.toggle('cards-transition');
          }, 100);
        
      }
    
      public shiftRight(): void {
        document.getElementsByClassName('speakers-cards')[0].classList.toggle('cards-transition');
        this.index++;
        if (this.index > this.speakers.length - 1) {
          this.index = 0;
        }
        this.speaker = this.speakers[this.index];
        setTimeout(() => {
          document.getElementsByClassName('speakers-cards')[0].classList.toggle('cards-transition');
        }, 100);
      }

      public startSlide(event: MouseEvent): void {
        this.clientXonMouseDown = event.clientX;
      }
  
      public startTouchSlide(event: any): void {
        this.clientXonMouseDown = event.touches[0].clientX;
      }
  
      public endSlide(event: MouseEvent): void {
        if (event.clientX + 10 < this.clientXonMouseDown) {
          this.shiftLeft();
        } else if (event.clientX - 10 > this.clientXonMouseDown) {
          this.shiftRight();
        }
      }
  
      public endTouchSlide(event: TouchEvent): void {
        if (event.touches[0].clientX + 10 < this.clientXonMouseDown) {
          this.shiftLeft();
        } else if (event.touches[0].clientX - 10 > this.clientXonMouseDown) {
          this.shiftRight();
        }
      }

}