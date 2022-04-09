import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { LoggerService } from '../logger/logger.service';
import { BasicReq } from '../types/BasicReq';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  logger = new LoggerService();

  catch(exception: HttpException, host: ArgumentsHost) {
    const http = host.switchToHttp();
    const response = http.getResponse<Response>();
    const request = http.getRequest<Request>();
    const args = request.body as BasicReq;
    let status = exception.getStatus();
    let msg: string;
    let info: any;

    switch (status) {
      case 400:
        msg =
          'Invalid request format. Please review your request and try again.';
        info = args.data;
        break;
      case 403:
        msg =
          'Permission denied. You do not have access to the requested endpoint.';
        info = `Requestor: ${args.user}`;
        break;
      case 404:
        msg = 'Resource not found. Please review your request and try again.';
        info = `Method: ${request.method}`;
        break;
      default:
        msg =
          'Server error. Something is broken on our end. Please let an admin know.';
        status = 500;
        break;
    }

    this.logger.error(`${status} - ${request.url}`, {
      status: status,
      exception: exception.message,
      method: request.method,
      args: args,
      url: request.url,
      user: args.user,
    });

    response.status(status).json({
      statusCode: status,
      message: msg,
      data: info ? info : undefined,
      path: request.url,
      timestamp: new Date().toISOString(),
    });
  }
}
