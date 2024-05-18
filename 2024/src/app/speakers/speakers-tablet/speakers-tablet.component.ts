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

    public ngOnInit(): void {
    if (this.index <= this.speakers.length - 2) {
        this.speakersPair.first = this.speakers[this.index];
        this.speakersPair.second = this.speakers[this.index + 1];
        } else if (this.index <= this.speakers.length - 1) {
        this.speakersPair.first = this.speakers[this.index];
        }
    }

    public shiftLeft(): void {
        if (this.index >= 2) {
          document.getElementsByClassName('speakers-cards')[0].classList.toggle('cards-transition');
          document.getElementsByClassName('speakers-fake-cards')[0].classList.toggle('cards-shift-right');
          this.index -= 2;
          
          setTimeout(() => {
            this.speakersPair.first = this.speakers[this.index];
            this.speakersPair.second = this.speakers[this.index + 1];
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
        if (this.index <= this.speakers.length - 2) {
          document.getElementsByClassName('speakers-cards')[0].classList.toggle('cards-transition');
          document.getElementsByClassName('speakers-fake-cards')[0].classList.toggle('cards-shift-left');
          this.index += 2;
          this.speakersPair.first = this.speakers[this.index];
          this.speakersPair.second = this.speakers[this.index + 1];
          setTimeout(() => {
            (document.getElementsByClassName('speakers-fake-cards')[0] as HTMLElement).style.display = 'none';
            document.getElementsByClassName('speakers-fake-cards')[0].classList.toggle('cards-shift-left');
            document.getElementsByClassName('speakers-cards')[0].classList.toggle('cards-transition');
            setTimeout(() => {      
                (document.getElementsByClassName('speakers-fake-cards')[0] as HTMLElement).style.display = 'flex';
            }, 10);
          }, 100);
        } else if (this.index <= this.speakers.length - 1) {
          this.speakersPair.first = this.speakers[this.index];
          delete this.speakersPair.second;
        }
      }

}