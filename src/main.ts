import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { TaskService } from './task/task.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
  for(let i = 0; i < 5; i++ ) {
    makeCoffee();
  }
}

async function makeCoffee() {
  setTimeout(() => {
    console.log('Preparandoo o café...');
  }, 5000);
}
bootstrap();

