import { ApiProperty } from "@nestjs/swagger";

export class GetWeatherByCityResponseDto {

    @ApiProperty({ 
        example: 'Quito'
    })
    city: string;

    @ApiProperty({ 
        example: 12
    })
    temperature: number;

    @ApiProperty({ 
        example: 6
    })
    feelsLike: number;

    @ApiProperty({ 
        example: 12
    })
    humidity: number;

    @ApiProperty({ 
        example: 'https://openweathermap.org/img/wn/03n@2x.png'
    })
    iconUrl: string;

    @ApiProperty({ 
        example: 'Clouds'
    })
    description: string;

    @ApiProperty({ 
        example: 'metric'
    })
    unit: string;

    constructor(partial: Partial<GetWeatherByCityResponseDto>) {
        Object.assign(this, partial);
    }
}