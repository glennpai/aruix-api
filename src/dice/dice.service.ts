import { Injectable } from '@nestjs/common';

@Injectable()
export class DiceService {
  rollDice(dice: number, rolls: number): number[][] {
    const result: number[][] = [];
    for (let i = 0; i < rolls; i++) {
      result.push(this.roll(dice));
    }
    return result;
  }

  roll(flips: number): number[] {
    const result: number[] = [];
    for (let i = 0; i < flips; i++) {
      result.push(1 + Math.round(Math.random() * 5));
    }
    return result;
  }
}
