import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'; 

export type GetWeatherByCityResponseDocument = GetWeatherByCityResponse & Document;

@Schema()
export class GetWeatherByCityResponse {

    @Prop()
    temperature: number;

    @Prop()
    feelsLike: number;

    @Prop()
    humidity: number;

    @Prop()
    iconUrl: string;

    @Prop()
    description: string;

    @Prop()
    unit: string;
}

export const GetWeatherByCityResponseSchema = SchemaFactory.createForClass(GetWeatherByCityResponse);