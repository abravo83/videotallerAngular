import { Routes } from '@angular/router';
import path from 'path';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: LandingComponent },
];
