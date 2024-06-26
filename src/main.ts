import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true, //elimina los campos extras, pero los ignora. No tira error
      forbidNonWhitelisted: true, //tira error si hay campos extras
      disableErrorMessages:
        process.env.ENVIRONMENT == 'production' ? true : false,
    }), //desactiva los mensajes de error en produccion
  );
  await app.listen(3000);
}
bootstrap();
