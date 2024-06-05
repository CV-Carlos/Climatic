import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger configuration
  const options = new DocumentBuilder() 
  .setTitle('Climatic')
  .setDescription('Climatic API REST with MongoDB')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, options); 

  // Documentation route
  SwaggerModule.setup('swagger', app, document);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
