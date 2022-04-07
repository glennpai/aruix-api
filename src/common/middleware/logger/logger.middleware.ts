import { Injectable, NestMiddleware, NotFoundException } from '@nestjs/common';
import { Router } from 'express';
import { LoggerService } from '../../logging/logger.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  logger: LoggerService = new LoggerService();
  routes: any[];

  use(req: any, res: any, next: () => void) {
    this.logger.log(`Request received at ${req.originalUrl}`);

    this.getRoutes(req);

    if (this.validRoute(req)) {
      throw new NotFoundException();
    } else {
      next();
    }
  }

  getRoutes(req: any): void {
    const router = req.app._router as Router;
    this.routes = router.stack
      .map((layer) => {
        if (layer.route) {
          const path = layer.route?.path;
          const method = layer.route?.stack[0].method.toUpperCase();
          return { method, path };
        }
      })
      .filter((item) => item !== undefined);
  }

  validRoute(req: any): boolean {
    return !this.routes.find(
      (route) =>
        JSON.stringify(route) ===
        JSON.stringify({ method: req.method, path: req.path }),
    );
  }
}
