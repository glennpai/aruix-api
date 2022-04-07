import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable, tap } from 'rxjs';
import { BasicRes } from 'src/common/types/BasicRes';
import { LoggerService } from './logger.service';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  private logger: LoggerService = new LoggerService();
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const http = context.switchToHttp();
    const request = http.getRequest();
    return next.handle().pipe(
      map((data) => this.buildResp(200, data, request.path)),
      tap(() => this.logger.success(`200 - ${request.url}`)),
    );
  }

  buildResp(code: number, data: any, path: string, msg?: any): BasicRes {
    return {
      statusCode: code,
      message: msg,
      data: data ? data : undefined,
      path: path,
      timestamp: new Date().toLocaleString(),
    };
  }
}
