import { Component } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavbarComponent, SliderComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {}
