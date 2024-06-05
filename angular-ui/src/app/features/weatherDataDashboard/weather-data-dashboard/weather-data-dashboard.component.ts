import { Component, OnInit, Input } from '@angular/core';
import { WeatherResponse } from '../../../core/models/weather-response.models';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather-data-dashboard',
  templateUrl: './weather-data-dashboard.component.html',
  standalone: true,
  styleUrls: ['./weather-data-dashboard.component.css'],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class WeatherDataDashboardComponent implements OnInit {
  @Input() weather: WeatherResponse[] | null = null;
  @Input() error: string = '';

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.weather = navigation.extras.state['weather'].weeklyWeather;
    }
  }

  selectedDayIndex = 0;
  days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  activeTab = 'temperature';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  ngOnInit(): void {
    if (!this.weather) {
      // Redirect to the welcome page if there's no weather data
      this.router.navigate(['/welcome']);
    }
  }

  getTemperatureUnit(unit?: string): string {
    switch (unit) {
      case 'metric':
        return '°C';
      case 'imperial':
        return '°F';
      default:
        return 'K'; // Kelvin as default
    }
  }

  onDayChange(dayIndex: number): void {
    this.selectedDayIndex = dayIndex;
  }

  /**
  * Navigates back to the welcome page for a new search.
  */
  newSearch(): void {
    this.router.navigate(['/welcome']);
  }

}