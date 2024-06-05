import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { ClimateThirdPartyServiceService } from './climate-third-party-service.service';
import { ApiTags } from '@nestjs/swagger';
import { GetWeatherByCityDto } from './dto/get-weather-by-city.dto';

@Controller('climate-third-party-service')
@ApiTags('weatherThirdPartyService')
export class ClimateThirdPartyServiceController {
  constructor(private readonly climateThirdPartyServiceService: ClimateThirdPartyServiceService) {}

    /**
   * Get weather information for a city.
   * @param getWeatherByCityDto - DTO containing the city name.
   * @returns An array of weather data for the week.
   */
  @Post()
  async getWeatherByCityName(@Body(ValidationPipe) getWeatherByCityName: GetWeatherByCityDto) {
    try 
    {
      const weatherData = await this.climateThirdPartyServiceService.getWeatherByCityName(getWeatherByCityName);
      return weatherData;
    } 
    catch (error) 
    {
      return { error: error.message }; // Return an error response
    }
  }

}
