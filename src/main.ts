import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { LoggerInterceptor } from './common/logging/logger.interceptor';
import { LoggerService } from './common/logging/logger.service';

async function bootstrap() {
  const logger = new LoggerService();
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LoggerInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(3000);

  logger.special(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
