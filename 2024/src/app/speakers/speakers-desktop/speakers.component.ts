import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { speakersOptions } from "../speakers.options";

@Component({
    selector: 'app-speaker',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './speakers.component.html',
    styleUrls: ['./speakers.component.scss'],
})
export class SpeakersComponponent implements OnInit {
    
    public speakers = speakersOptions;

    public ngOnInit(): void {
       
    }

    public loadMore(): void {

    }

}