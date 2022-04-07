import { Controller, Get } from '@nestjs/common';

@Controller()
export class StatusController {
  @Get('/status')
  async getCoin(): Promise<string> {
    return '200 OK';
  }
}
