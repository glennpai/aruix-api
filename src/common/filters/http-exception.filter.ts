import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { LoggerService } from '../logging/logger.service';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  logger = new LoggerService();

  catch(exception: HttpException, host: ArgumentsHost) {
    const http = host.switchToHttp();
    const response = http.getResponse<Response>();
    const request = http.getRequest<Request>();
    let status = exception.getStatus();
    let msg =
      'Server error. Something is broken on our end. Please let an admin know.';
    let info: any;

    this.logger.error(`${status} - ${request.url}`);

    switch (status) {
      case 400:
        msg =
          'Invalid request format. Please review your request and try again.';
        info = request.body.data;
        break;
      case 403:
        msg =
          'Permission denied. You do not have access to the requested endpoint.';
        info = `Requestor: ${request.body.user}`;
        break;
      case 404:
        msg = 'Resource not found. Please review your request and try again.';
        info = `Method: ${request.method}`;
        break;
      default:
        status = 500;
        break;
    }

    response.status(status).json({
      statusCode: status,
      message: msg,
      data: info ? info : undefined,
      path: request.url,
      timestamp: new Date().toISOString(),
    });
  }
}
