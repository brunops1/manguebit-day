import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { maintaintersOptions } from "../maintainters.options";

@Component({
    selector: 'app-maintainers-desktop',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './maintainers-desktop.component.html',
    styleUrls: ['./maintainers-desktop.component.scss']
})
export class MaintainersDesktopComponent implements OnInit {
    
    public maintainers = maintaintersOptions;

    public ngOnInit(): void {
        
    }

    public goToLink(url: string): void {
        window.open(url, '_blank');
    }

}