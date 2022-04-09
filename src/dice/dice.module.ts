import { Module } from '@nestjs/common';
import { LoggerService } from '../common/logger/logger.service';
import { DiceController } from './dice.controller';
import { DiceService } from './dice.service';

@Module({
  controllers: [DiceController],
  providers: [DiceService, LoggerService],
})
export class DiceModule {}
