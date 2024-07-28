import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApiKeyGuard } from './auth/guards/apikey.guard';
import { ConfigService } from '@nestjs/config';
import { AllExceptionFilter } from './common/exception/http.exception';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {

  const port = process.env.DB_PORT

  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('My App API')
  .setDescription('The API documentation for My App')
  .setVersion('1.0')
  .addTag('Users')
  .addBearerAuth()
  .build();

const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

  app.useGlobalGuards(new ApiKeyGuard(app.get(Reflector), app.get(ConfigService)))
  app.useGlobalFilters(new AllExceptionFilter());
  await app.listen(port);
}
bootstrap();
