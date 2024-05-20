import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-event-preview',
    standalone: true,
    imports: [],
    templateUrl: './event-preview.component.html',
    styleUrls: ['./event-preview.component.scss']
})
export class EventPreviewComponent implements OnInit {
    
    public ngOnInit(): void {
       
    }

    public goToLink(url: string): void {
        window.open(url, '_blank');
    }

}