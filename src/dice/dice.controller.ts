import { BadRequestException, Body, Controller, Get } from '@nestjs/common';
import { BasicReq } from '../common/types/BasicReq';
import { DiceService } from './dice.service';

@Controller()
export class DiceController {
  constructor(private diceService: DiceService) {}

  @Get('dice')
  getCoin(@Body() body: BasicReq): number[][] {
    const { data } = body;
    const dice = data[Object.keys(data).find((key) => key === 'dice')];
    const rolls = data[Object.keys(data).find((key) => key === 'rolls')];
    if (Number.isInteger(dice) && Number.isInteger(rolls)) {
      return this.diceService.rollDice(dice, rolls);
    } else {
      throw new BadRequestException();
    }
  }
}
