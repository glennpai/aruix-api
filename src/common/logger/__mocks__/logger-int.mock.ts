import { BasicRes } from '../../../common/types/BasicRes';

export class LoggerInterceptor {
  intercept(request: any) {
    return this.buildResp(
      request.statusCode,
      request.data,
      request.path,
      request?.message,
    );
  }

  buildResp(code: number, data: any, path: string, msg?: any): BasicRes {
    return {
      statusCode: code,
      message: msg,
      data: data,
      path: path,
      timestamp: '01/01/2022, 1:01:01 PM',
    };
  }
}
