import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true
    // wiping out the unnecessory 
  }))
  const conf =new DocumentBuilder()
  .setTitle("Nest api")
  .setDescription("my nest api application")
  .setVersion("1.0")
  .build()
  const document=SwaggerModule.createDocument(app,conf)
  SwaggerModule.setup("/",app,document)

  await app.listen(3500); 
}
bootstrap();
