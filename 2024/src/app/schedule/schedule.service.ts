import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ScheduleService {
    public comingSoon = true; //set this to false if there is scheduled events
}