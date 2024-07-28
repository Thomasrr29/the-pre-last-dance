import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApiKeyGuard } from './auth/guards/apikey.guard';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {

  const port = process.env.DB_PORT

  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards(new ApiKeyGuard(app.get(Reflector), app.get(ConfigService)))
  await app.listen(port);
}
bootstrap();
