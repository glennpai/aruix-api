import { Module } from '@nestjs/common';
import { LoggerService } from '../common/logger/logger.service';
import { CoinController } from './coin.controller';
import { CoinService } from './coin.service';

@Module({
  controllers: [CoinController],
  providers: [CoinService, LoggerService],
})
export class CoinModule {}
