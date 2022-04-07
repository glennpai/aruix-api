import { Injectable } from '@nestjs/common';
import { color } from '../types/Color';

@Injectable()
export class LoggerService {
  log(message: string, data?: any): void {
    console.log(`${color.white} ${new Date().toLocaleString()} -- ${message}`);
  }

  special(message: string, data?: any): void {
    console.log(
      `${color.magenta} ${new Date().toLocaleString()} -- ${message}`,
    );
  }

  debug(message: string, data?: any): void {
    if (process.env.DEBUG) {
      console.log(`${color.cyan} ${new Date().toLocaleString()} -- ${message}`);
    }
  }

  warn(message: string, data?: any): void {
    console.log(`${color.yellow} ${new Date().toLocaleString()} -- ${message}`);
  }

  error(message: string, data?: any): void {
    console.log(`${color.red} ${new Date().toLocaleString()} -- ${message}`);
  }

  success(message: string, data?: any): void {
    console.log(`${color.green} ${new Date().toLocaleString()} -- ${message}`);
  }
}
