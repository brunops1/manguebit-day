import { Component, OnInit } from "@angular/core";
import { maintaintersOptions } from "./maintainters.options";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-maintainers',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './maintainers.component.html',
    styleUrls: ['./maintainers.component.scss']
})
export class MaintainersComponent implements OnInit {
    
    public index = 0;
    public maintainers = maintaintersOptions;
    public maintainer: { image_address?: string; linkedin?: string; name?: string } = {};  

    public ngOnInit(): void {
        if (this.maintainers?.length > 0) {
            this.maintainer = this.maintainers[0];
        }
    }

    public goToLink(url: string): void {
        window.open(url, '_blank');
    }

    public shiftLeft(): void {
        if (this.index >= 1) {
            document.getElementsByClassName('maintainers-cards')[0].classList.toggle('cards-transition');
            document.getElementsByClassName('maintainers-fake-cards')[0].classList.toggle('cards-shift-right');
            this.index--;
            
            setTimeout(() => {
            this.maintainer = this.maintainers[this.index];
            (document.getElementsByClassName('maintainers-fake-cards')[0] as HTMLElement).style.display = 'none';
            document.getElementsByClassName('maintainers-fake-cards')[0].classList.toggle('cards-shift-right');
            document.getElementsByClassName('maintainers-cards')[0].classList.toggle('cards-transition');
            setTimeout(() => {      
                (document.getElementsByClassName('maintainers-fake-cards')[0] as HTMLElement).style.display = 'flex';
            }, 10);
            }, 100);
        }
    }

    public shiftRight(): void {
        if (this.index < this.maintainers.length - 1) {
            document.getElementsByClassName('maintainers-cards')[0].classList.toggle('cards-transition');
            document.getElementsByClassName('maintainers-fake-cards')[0].classList.toggle('cards-shift-left');
            this.index++;
            this.maintainer = this.maintainers[this.index];
            setTimeout(() => {
            (document.getElementsByClassName('maintainers-fake-cards')[0] as HTMLElement).style.display = 'none';
            document.getElementsByClassName('maintainers-fake-cards')[0].classList.toggle('cards-shift-left');
            document.getElementsByClassName('maintainers-cards')[0].classList.toggle('cards-transition');
            setTimeout(() => {      
                (document.getElementsByClassName('maintainers-fake-cards')[0] as HTMLElement).style.display = 'flex';
            }, 10);
            }, 100);
        }
    }

}