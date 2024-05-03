import { Component } from '@angular/core';
import { MenuButtonComponent } from '../menu/menu.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MenuButtonComponent],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.scss'
})
export class NavBarComponent {

}
