import { Injectable } from '@nestjs/common';

@Injectable()
export class CoinService {
  flipCoin(flips: number): string[] {
    const result = this.flip(flips);
    return result.map((result) => {
      return result === 1 ? 'Heads' : 'Tails';
    });
  }

  flip(flips: number): number[] {
    const result: number[] = [];
    for (let i = 0; i < flips; i++) {
      result.push(Math.round(Math.random()));
    }
    return result;
  }
}
