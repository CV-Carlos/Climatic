import { Module } from '@nestjs/common';
import { ClimateThirdPartyServiceService } from './climate-third-party-service.service';
import { ClimateThirdPartyServiceController } from './climate-third-party-service.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { GetWeatherByCityResponseList, WeeklyWeatherSchema } from './schemas/weather-by-city-response-list.schema';
import { GetWeatherByCityResponse, GetWeatherByCityResponseSchema } from './schemas/get-weather-by-city-response.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: GetWeatherByCityResponseList.name, schema: WeeklyWeatherSchema }]),
    MongooseModule.forFeature([{ name: GetWeatherByCityResponse.name, schema: GetWeatherByCityResponseSchema }]),
  ],
  controllers: [ClimateThirdPartyServiceController],
  providers: [ClimateThirdPartyServiceService],
})
export class ClimateThirdPartyServiceModule {}
