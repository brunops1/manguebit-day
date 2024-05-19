import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { maintaintersOptions } from "../maintainters.options";

@Component({
    selector: 'app-maintainers-tablet',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './maintainers-tablet.component.html',
    styleUrls: ['./maintainers-tablet.component.scss']
})
export class MaintainersTabletComponenet implements OnInit {
    
    public maintainerPair: { 
        first?: { name: string; image_address: string; linkedin: string }, 
        second?: { name: string; image_address: string; linkedin: string }
    } = {};
    public index = 0;
    public maintainers = maintaintersOptions;

    public ngOnInit(): void {
    if (this.index <= this.maintainers.length - 2) {
        this.maintainerPair.first = this.maintainers[this.index];
        this.maintainerPair.second = this.maintainers[this.index + 1];
        } else if (this.index <= this.maintainers.length - 1) {
        this.maintainerPair.first = this.maintainers[this.index];
        }
    }

    public goToLink(url: string): void {
        window.open(url, '_blank');
    }

    public shiftLeft(): void {
      document.getElementsByClassName('maintainers-cards')[0].classList.toggle('cards-transition');
      this.index -= 2;
      
      setTimeout(() => {
        if (this.index < 0) {
            if (-this.index % 2 == 0) {
              this.index = this.maintainers.length - 2;
              this.maintainerPair.first = this.maintainers[this.index];
              this.maintainerPair.second = this.maintainers[this.index + 1];
            } else {
              this.index = this.maintainers.length - 1;
              this.maintainerPair.first = this.maintainers[this.index];
              this.maintainerPair.second = this.maintainers[0];
            }
          } else {
            this.maintainerPair.first = this.maintainers[this.index];
            this.maintainerPair.second = this.maintainers[this.index + 1];
          }
        document.getElementsByClassName('maintainers-cards')[0].classList.toggle('cards-transition');
      }, 100);
    }

    public shiftRight(): void {      
      document.getElementsByClassName('maintainers-cards')[0].classList.toggle('cards-transition');
      this.index += 2;
      
      setTimeout(() => {
        if (this.index > this.maintainers.length - 1) {
          this.index = 0;   
        }
        this.maintainerPair.first = this.maintainers[this.index];
        this.maintainerPair.second = this.maintainers[this.index + 1];
        document.getElementsByClassName('maintainers-cards')[0].classList.toggle('cards-transition');
      }, 100);
      
    }

}