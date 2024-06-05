import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../models/weather-response.models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'http://localhost:3000/climate-third-party-service'; // Update with your NestJS API URL

  constructor(private http: HttpClient) {}

  getWeather(cityName: string): Observable<WeatherResponse[]> {
    return this.http.post<WeatherResponse[]>(this.apiUrl, { cityName });
  }
}
