import { Routes } from '@angular/router';
import { WelcomeAndSearchComponent } from './features/welcomeAndSearch/welcome-and-search/welcome-and-search.component';
import { WeatherDataDashboardComponent } from './features/weatherDataDashboard/weather-data-dashboard/weather-data-dashboard.component';

export const routes: Routes = [
  { path: 'welcome', component: WelcomeAndSearchComponent },
  { path: 'weather-dashboard', component: WeatherDataDashboardComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' }, // Redirect to welcome by default
  { path: '**', redirectTo: '/welcome' } // Redirect any unknown routes to welcome
];
