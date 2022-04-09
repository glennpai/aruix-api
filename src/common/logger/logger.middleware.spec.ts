import { LoggerMiddleware } from './__mocks__/logger-mw.mock';

const mockRequests = {
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  paths: ['/path1', '/path2', '/path3', '/path4'],
};

describe('loggerMWMiddleware', () => {
  const loggerMW = new LoggerMiddleware();
  jest.spyOn(loggerMW, 'use');
  jest.spyOn(loggerMW, 'getRoutes');
  jest.spyOn(loggerMW, 'validRoute');

  it('should be defined', () => {
    expect(loggerMW).toBeTruthy();
  });

  it('methods return when called', () => {
    loggerMW.use({
      method: mockRequests.methods[0],
      path: mockRequests.paths[0],
    });
    expect(loggerMW.use).toHaveBeenCalled();
    expect(loggerMW.use).toHaveReturned();
    expect(loggerMW.getRoutes).toHaveBeenCalled();
    expect(loggerMW.getRoutes).toHaveReturned();
    expect(loggerMW.validRoute).toHaveBeenCalled();
    expect(loggerMW.validRoute).toHaveReturned();
  });

  it('middleware detects invalid requests', () => {
    mockRequests.paths.forEach((path) => {
      mockRequests.methods.forEach((method) => {
        const resp = loggerMW.use({ method: method, path: path });
        if (
          mockRequests.methods.indexOf(method) ==
          mockRequests.paths.indexOf(path)
        ) {
          expect(resp.statusCode).toBe(200);
          expect(resp.message).toBeUndefined();
        } else {
          expect(resp.statusCode).toBe(404);
          expect(resp.message).toBe(`Cannot ${method} ${path}`);
        }
      });
    });
  });
});
