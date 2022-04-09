import { Injectable } from '@nestjs/common';
import { Color } from '../types/Color';

@Injectable()
export class LoggerService {
  log(message: string, data?: any): void {
    console.log(
      `${Color.white}${new Date().toLocaleString()} -- ${message}${
        Color.white
      }`,
    );
    // TODO have console logs dump to file on a specified schedule
  }

  special(message: string, data?: any): void {
    console.log(
      `${
        Color.magenta
      }${new Date().toLocaleString()} -- ** NOTICE ** ${message}${Color.white}`,
    );
  }

  debug(message: string, data?: any): void {
    if (process.env.DEBUG) {
      console.log(
        `${Color.cyan}${new Date().toLocaleString()} -- :: DEBUG :: ${message}${
          Color.white
        }`,
      );
    }
  }

  warn(message: string, data?: any): void {
    console.log(
      `${
        Color.yellow
      }${new Date().toLocaleString()} -- !! WARNING !! ${message}${
        Color.white
      }`,
    );
  }

  error(message: string, data?: any): void {
    console.log(
      `${Color.red}${new Date().toLocaleString()} -- !! ERROR !!: ${message}${
        Color.white
      }`,
    );
    if (data) {
      console.log(
        `${Color.red}${new Date().toLocaleString()} -- ${JSON.stringify(data)}${
          Color.white
        }`,
      );
    }
    // TODO Add error log to persistent database table
  }

  success(message: string, data?: any): void {
    console.log(
      `${Color.green}${new Date().toLocaleString()} -- ${message}${
        Color.white
      }`,
    );
  }
}
