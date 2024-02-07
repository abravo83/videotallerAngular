import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  animations: [
    trigger('deslizarseIzq', [
      state(
        'void',
        style({
          transform: 'translateX(250px)',
        })
      ),
      transition('void => *', [
        animate(
          '700ms ease-out',
          style({
            transform: 'translateX(0)',
          })
        ),
      ]),
      transition('* => void', [
        animate(
          '700ms ease-out',
          style({
            transform: 'translateX(150px)',
          })
        ),
      ]),
    ]),
  ],
})
export class NavbarComponent {
  menuLateralVisible = false;

  toggleMenuLateral() {
    this.menuLateralVisible = !this.menuLateralVisible;
  }
}
