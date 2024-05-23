import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { FooterModule } from './footer/footer.module';
import { NavBarComponent } from './nav-bar/bar/bar.component';

@Component({ // Standalone compents now declares their dependencies directly, they dont come from ngModules anymore
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, FooterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'manguebit';

  public clickListener(event: Event): void {
    if ((event.target as HTMLElement).getAttribute('class') != 'hamburguer-button') {
      if (document.querySelector('.list')?.getAttribute('class') == 'list dropdown-active') {
        document.querySelector('.list')?.classList.toggle('dropdown-active');
      }
    }
  }
}
