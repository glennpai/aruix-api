import { BasicRes } from '../../types/BasicRes';

const routes = [
  { method: 'GET', path: '/path1' },
  { method: 'POST', path: '/path2' },
  { method: 'PUT', path: '/path3' },
  { method: 'DELETE', path: '/path4' },
];

export class LoggerMiddleware {
  routes: any[];

  use(req: any) {
    this.getRoutes();
    if (this.validRoute(req)) {
      return {
        statusCode: 200,
        path: req.path,
        timestamp: '1/1/2022, 01:01:01',
      } as BasicRes;
    } else {
      return {
        statusCode: 404,
        path: req.path,
        message: `Cannot ${req.method} ${req.path}`,
        timestamp: '1/1/2022, 01:01:01',
      } as BasicRes;
    }
  }

  getRoutes(): void {
    this.routes = routes
      .map((route) => {
        const path = route.path;
        const method = route.method;
        return { method, path };
      })
      .filter((item) => item !== undefined);
  }

  validRoute(req: any): boolean {
    return this.routes.find(
      (route) =>
        JSON.stringify(route) ===
        JSON.stringify({ method: req.method, path: req.path }),
    );
  }
}
