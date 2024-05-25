import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { speakersOptions } from "../speakers.options";

@Component({
    selector: 'app-speakers-tablet',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './speakers-tablet.component.html',
    styleUrls: ['./speakers-tablet.component.scss']
})
export class SpeakersTabletComponent implements OnInit {

    public speakersPair: { 
        first?: { name: string; role: string; image_address: string, pallet: string[],icon_set: string[] }, 
        second?: { name: string; role: string; image_address: string, pallet: string[],icon_set: string[] }
    } = {};
    public index = 0;
    public speakers = speakersOptions;

    public clientXonMouseDown = 0;
    public clientXonMouseUp = 0;

    public ngOnInit(): void {
      this.clientXonMouseDown = 0;
      this.clientXonMouseUp = 0;
      if (this.index <= this.speakers.length - 2) {
        this.speakersPair.first = this.speakers[this.index];
        this.speakersPair.second = this.speakers[this.index + 1];
      } else if (this.index <= this.speakers.length - 1) {
        this.speakersPair.first = this.speakers[this.index];
      }
    }

    public shiftLeft(): void {
      document.getElementsByClassName('speakers-cards')[0].classList.toggle('cards-transition');
      this.index -= 2;
      
      setTimeout(() => {
        if (this.index < 0) {
          if (-this.index % 2 == 0) {
            this.index = this.speakers.length - 2;
            this.speakersPair.first = this.speakers[this.index];
            this.speakersPair.second = this.speakers[this.index + 1];
          } else {
            this.index = this.speakers.length - 1;
            this.speakersPair.first = this.speakers[this.index];
            this.speakersPair.second = this.speakers[0];
          }
        } else {
          this.speakersPair.first = this.speakers[this.index];
          this.speakersPair.second = this.speakers[this.index + 1];
        }
        document.getElementsByClassName('speakers-cards')[0].classList.toggle('cards-transition');
      }, 100);
    }

    public shiftRight(): void {      
      document.getElementsByClassName('speakers-cards')[0].classList.toggle('cards-transition');
      this.index += 2;
      
      setTimeout(() => {
        if (this.index > this.speakers.length - 1) {
          this.index = 0;   
        }
        this.speakersPair.first = this.speakers[this.index];
        this.speakersPair.second = this.speakers[this.index + 1];
        document.getElementsByClassName('speakers-cards')[0].classList.toggle('cards-transition');
      }, 100);
      
    }

    public startSlide(event: MouseEvent): void {
      this.clientXonMouseDown = event.clientX;
    }

    public startTouchSlide(event: TouchEvent): void {
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