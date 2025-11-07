import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { name, version, description } from '../package.json';

export function generateDocument(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle(name)
    .setDescription(description)
    .setVersion(version)
    .build();

  SwaggerModule.setup(
    'api-doc',
    app,
    SwaggerModule.createDocument(app, config),
  );
}
