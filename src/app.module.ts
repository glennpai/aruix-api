import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { CoinModule } from './coin/coin.module';
import { LoggerMiddleware } from './common/logger/logger.middleware';
import { AccessMiddleware } from './common/middleware/access/access.middleware';
import { StatusController } from './status/status.controller';
import { LoggerService } from './common/logger/logger.service';
import { DiceModule } from './dice/dice.module';

@Module({
  imports: [CoinModule, DiceModule],
  controllers: [StatusController],
  providers: [LoggerService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, AccessMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
