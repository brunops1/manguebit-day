import { Component, OnInit } from "@angular/core";
import { speakersOptions } from "../speakers.options";
import { CommonModule } from "@angular/common";

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

    public ngOnInit(): void {
        if (this.speakers?.length > 0) {
          this.speaker = this.speakers[0];
        }
      }
    
      public shiftLeft(): void {
        if (this.index >= 1) {
          document.getElementsByClassName('speakers-cards')[0].classList.toggle('cards-transition');
          document.getElementsByClassName('speakers-fake-cards')[0].classList.toggle('cards-shift-right');
          this.index--;
          
          setTimeout(() => {
            this.speaker = this.speakers[this.index];
            (document.getElementsByClassName('speakers-fake-cards')[0] as HTMLElement).style.display = 'none';
            document.getElementsByClassName('speakers-fake-cards')[0].classList.toggle('cards-shift-right');
            document.getElementsByClassName('speakers-cards')[0].classList.toggle('cards-transition');
            setTimeout(() => {      
                (document.getElementsByClassName('speakers-fake-cards')[0] as HTMLElement).style.display = 'flex';
            }, 10);
          }, 100);
        }
      }
    
      public shiftRight(): void {
        if (this.index < this.speakers.length - 1) {
          document.getElementsByClassName('speakers-cards')[0].classList.toggle('cards-transition');
          document.getElementsByClassName('speakers-fake-cards')[0].classList.toggle('cards-shift-left');
          this.index++;
          this.speaker = this.speakers[this.index];
          setTimeout(() => {
            (document.getElementsByClassName('speakers-fake-cards')[0] as HTMLElement).style.display = 'none';
            document.getElementsByClassName('speakers-fake-cards')[0].classList.toggle('cards-shift-left');
            document.getElementsByClassName('speakers-cards')[0].classList.toggle('cards-transition');
            setTimeout(() => {      
                (document.getElementsByClassName('speakers-fake-cards')[0] as HTMLElement).style.display = 'flex';
            }, 10);
          }, 100);
        }
      }

}