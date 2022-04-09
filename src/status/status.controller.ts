import { Controller, Get } from '@nestjs/common';

@Controller()
export class StatusController {
  @Get('/status')
  async getStatus(): Promise<string> {
    return 'OK';
  }
}
