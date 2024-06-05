import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions, FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { WeatherService } from '../../../core/services/weather.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { WeatherDataDashboardComponent } from "../../weatherDataDashboard/weather-data-dashboard/weather-data-dashboard.component";

@Component({
    selector: 'app-welcome-and-search',
    standalone: true,
    templateUrl: './welcome-and-search.component.html',
    styleUrl: './welcome-and-search.component.css',
    providers: [WeatherService],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormlyModule,
        FormlyBootstrapModule,
        WeatherDataDashboardComponent
    ]
})
export class WelcomeAndSearchComponent {
  cityForm = new FormGroup({});
  model = { city: '' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'city',
      type: 'input',
      templateOptions: {
        label: 'City',
        placeholder: 'Enter city name',
        required: true,
      }
    }
  ];

  options: FormlyFormOptions = {};
  weather: any;
  error: string = '';

  constructor(private weatherService: WeatherService, private router: Router) {}

  /**
  * Submits the city name to get weather data.
  * @param model - The form model containing the city name.
  */
  submit(model: any) {
    if (this.cityForm.valid) {
      this.weatherService.getWeather(model.city).subscribe(
        data => {
          if (!data || data.length > 0) {
            this.error = 'No weather information available for the specified city.';
          } 
          else 
          {
            this.router.navigate(['/weather-dashboard'], { state: { weather: data } });
          }
        },
        error => {
          this.error = 'Error fetching weather data. Please try again.';
          console.error('Error fetching weather data:', error);
        }
      );
    }
  }
}