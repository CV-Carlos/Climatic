import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { GetWeatherByCityResponse } from './get-weather-by-city-response.schema';
import mongoose from 'mongoose';

export type GetWeatherByCityResponseListDocument = GetWeatherByCityResponseList & Document;

@Schema()
export class GetWeatherByCityResponseList {

  @Prop({ type: Date, default: Date.now, required: true })
  requestDate: Date;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'GetWeatherByCityResponse' }], required: true })
  weeklyWeather: GetWeatherByCityResponse[];
}

export const WeeklyWeatherSchema = SchemaFactory.createForClass(GetWeatherByCityResponseList);