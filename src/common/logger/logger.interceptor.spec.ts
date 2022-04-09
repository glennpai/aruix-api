import { LoggerInterceptor } from './__mocks__/logger-int.mock';

const requests = [
  {
    statusCode: 200,
    data: {
      item: 'Test item',
    },
    path: '/path',
  },
  {
    statusCode: 200,
    path: '/path',
  },
  {
    statusCode: 404,
    data: {
      item: 'Test item',
    },
    path: '/path',
  },
  {
    statusCode: 200,
    data: {
      item: 'Test item',
    },
    path: '/path',
    message: 'Test message',
  },
];

describe('LoggerInterceptor', () => {
  const loggerInt = new LoggerInterceptor();
  jest.spyOn(loggerInt, 'intercept');
  jest.spyOn(loggerInt, 'buildResp');

  it('should be defined', () => {
    expect(loggerInt).toBeDefined();
  });

  it('methods return when called', () => {
    loggerInt.intercept(requests[0]);
    expect(loggerInt.intercept).toHaveBeenCalled();
    expect(loggerInt.intercept).toHaveReturned();
    expect(loggerInt.buildResp).toHaveBeenCalled();
    expect(loggerInt.buildResp).toHaveReturned();
  });

  it('should return expected response', () => {
    requests.forEach((request) => {
      expect(loggerInt.intercept(request)).toMatchObject({
        statusCode: request.statusCode,
        message: request.message,
        data: request.data,
        path: request.path,
        timestamp: '01/01/2022, 1:01:01 PM',
      });
    });
  });
});
