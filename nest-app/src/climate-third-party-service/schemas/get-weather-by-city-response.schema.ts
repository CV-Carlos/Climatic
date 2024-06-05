import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'; 

export type GetWeatherByCityResponseDocument = GetWeatherByCityResponse & Document;

@Schema()
export class GetWeatherByCityResponse {

    @Prop()
    temperature: string;

    @Prop()
    feelsLike: string;

    @Prop()
    humidity: string;

    @Prop()
    iconUrl: string;

    @Prop()
    description: string;

    @Prop()
    unit: string;
}

export const GetWeatherByCityResponseSchema = SchemaFactory.createForClass(GetWeatherByCityResponse);