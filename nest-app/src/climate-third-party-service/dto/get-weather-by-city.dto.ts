import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class GetWeatherByCityDto {

    @ApiProperty({ 
        example: 'Quito'
    })
    @IsString()
    readonly cityName: string;
}
