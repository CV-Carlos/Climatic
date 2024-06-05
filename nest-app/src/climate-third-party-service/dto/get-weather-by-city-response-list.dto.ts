import { ApiProperty } from '@nestjs/swagger';
import { GetWeatherByCityResponseDto } from './get-weather-by-city-response.dto';

export class GetWeatherByCityResponseListDto {
  @ApiProperty({ type: [GetWeatherByCityResponseDto] })
  weeklyWeather: GetWeatherByCityResponseDto[];
}