import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  const port = process.env.DB_PORT

  const app = await NestFactory.create(AppModule);
  console.log(`Running on port ${port}`)
  await app.listen(port);
}
bootstrap();
