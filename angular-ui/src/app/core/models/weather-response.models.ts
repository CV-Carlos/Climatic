export interface WeatherResponse {
  city: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  iconUrl: string;
  description: string;
  unit: string; // "metric" for Celsius, "imperial" for Fahrenheit, etc.
}