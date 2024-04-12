import { Routes } from '@angular/router';
import { MainComponent } from './main/main/main.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/manguebit',
        pathMatch: 'full'
    },
    {
        path: 'manguebit',
        component: MainComponent
    }
];
