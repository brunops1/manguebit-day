import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ScheduleService {
    public comingSoon = false; //set this to false if there is scheduled events
}