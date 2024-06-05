import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClimateThirdPartyServiceModule } from './climate-third-party-service/climate-third-party-service.module';

@Module({
  imports: [ConfigModule.forRoot({
              isGlobal: true,
            }),
            MongooseModule.forRootAsync({
              imports: [ConfigModule],
              useFactory: async (configService: ConfigService) => ({
                uri: configService.get<string>('MONGODB_URI'),
              }),
              inject: [ConfigService],
            }),
            ClimateThirdPartyServiceModule],
  controllers: [AppController], 
  providers: [AppService],
})
export class AppModule {}
