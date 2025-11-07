import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { generateDocument } from './docs';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: ['1'],
  });
  generateDocument(app);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
