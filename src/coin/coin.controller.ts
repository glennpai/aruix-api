import { Controller, Get, Body, BadRequestException } from '@nestjs/common';
import { BasicReq } from '../common/types/BasicReq';
import { CoinService } from './coin.service';

@Controller()
export class CoinController {
  constructor(private coinService: CoinService) {}

  @Get('coin')
  getCoin(@Body() flipsReq: BasicReq): string[] {
    const { data } = flipsReq;
    const flips = data[Object.keys(data).find((key) => key === 'flips')];
    if (Number.isInteger(flips)) {
      return this.coinService.flipCoin(flips);
    } else {
      throw new BadRequestException();
    }
  }
}
