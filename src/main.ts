import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = parseInt(process.env.APPLICATION_PORT, 10) || 3000;
  console.log(PORT);
  await app.listen(PORT);
}
bootstrap();
