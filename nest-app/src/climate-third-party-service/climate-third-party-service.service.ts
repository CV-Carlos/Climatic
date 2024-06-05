import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenWeatherAPI from 'openweather-api-node';
import { GetWeatherByCityDto } from './dto/get-weather-by-city.dto';
import { GetWeatherByCityResponseDto } from './dto/get-weather-by-city-response.dto';
import { GetWeatherByCityResponseListDto } from './dto/get-weather-by-city-response-list.dto';
import { InjectModel } from '@nestjs/mongoose';
import { GetWeatherByCityResponseList, GetWeatherByCityResponseListDocument } from './schemas/weather-by-city-response-list.schema';
import { Model } from 'mongoose';
import { GetWeatherByCityResponse, GetWeatherByCityResponseDocument } from './schemas/get-weather-by-city-response.schema';

@Injectable()
export class ClimateThirdPartyServiceService 
{
    private readonly logger = new Logger(ClimateThirdPartyServiceService.name);
    private openWeather;
    
    constructor(private configService: ConfigService,
                @InjectModel(GetWeatherByCityResponse.name) private readonly weatherModel: Model<GetWeatherByCityResponseDocument>,
                @InjectModel(GetWeatherByCityResponseList.name) private weatherListModel: Model<GetWeatherByCityResponseListDocument>) 
    {
        const apiKey = this.configService.get<string>('OPENWEATHER_API_KEY');
        this.openWeather = new OpenWeatherAPI({
            key: apiKey,
            units: 'metric'
        });
    }

    async getWeatherByCityName(getWeatherByCityName: GetWeatherByCityDto): Promise<GetWeatherByCityResponseListDto> 
    {
        try 
        {
            this.openWeather.setLocationByName(getWeatherByCityName.cityName);
            const data = await this.openWeather.getCurrent();
            let weather = data.weather;
            let weatherWeeklyResult: GetWeatherByCityResponseListDto = new GetWeatherByCityResponseListDto;
            weatherWeeklyResult.weeklyWeather = [];
            for (let i = 0; i < 7; i++) {
                weatherWeeklyResult.weeklyWeather.push(
                                new GetWeatherByCityResponseDto({city: getWeatherByCityName.cityName,
                                                                temperature: weather.temp.cur + i,
                                                                feelsLike: weather.feelsLike.cur + i,
                                                                humidity: weather.humidity + i,               
                                                                iconUrl: weather.icon.url,
                                                                description: weather.main,
                                                                unit: this.openWeather.getUnits()
                                                            }))
            } 
            const weatherDocuments = await Promise.all(
                weatherWeeklyResult.weeklyWeather.map(async (weatherDto: GetWeatherByCityResponseDto) => {
                  const weatherDoc = new this.weatherModel(weatherDto);
                  return weatherDoc.save();
                })
            );
            const newWeatherList = new this.weatherListModel({
                weeklyWeather: weatherDocuments,
            });
            await newWeatherList.save();
            return weatherWeeklyResult;            
        }
        catch (error) 
        {
            this.logger.error(`Error fetching weather data: ${error.message}`);
            throw error;
        }
    }
}
