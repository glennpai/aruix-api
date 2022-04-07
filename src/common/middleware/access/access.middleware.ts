import { Injectable, NestMiddleware } from '@nestjs/common';

// TODO: Implement

@Injectable()
export class AccessMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    next();
  }
}
