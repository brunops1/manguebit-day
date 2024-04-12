import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class NavBarService {
    constructor() {}

    public test(): void {
        console.log('testing nav bar service');
    }
}