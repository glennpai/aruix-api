import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { LoggerInterceptor } from './common/logger/logger.interceptor';
import { LoggerService } from './common/logger/logger.service';

async function bootstrap() {
  // Configure server to use filters, middleware, and interceptors globally
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LoggerInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());

  // Start server
  await app.listen(3000);

  const logger = new LoggerService();
  logger.special(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
