import { Component, OnInit } from "@angular/core";
import { maintaintersOptions } from "../maintainters.options";
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
        document.getElementsByClassName('maintainers-cards')[0].classList.toggle('cards-transition');
        this.index--;
        
        setTimeout(() => {
            if (this.index < 0) {
                this.index = this.maintainers.length - 1;
            }
            this.maintainer = this.maintainers[this.index];
            document.getElementsByClassName('maintainers-cards')[0].classList.toggle('cards-transition');
        }, 100);
    }

    public shiftRight(): void {
        document.getElementsByClassName('maintainers-cards')[0].classList.toggle('cards-transition');
        this.index++;
        
        setTimeout(() => {
            if (this.index > this.maintainers.length - 1) {
                this.index = 0;   
            }
            this.maintainer = this.maintainers[this.index];
            document.getElementsByClassName('maintainers-cards')[0].classList.toggle('cards-transition');
        }, 100);
    }
}