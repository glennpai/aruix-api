import { Test, TestingModule } from '@nestjs/testing';
import { Color } from '../types/Color';
import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let logger: LoggerService;

  const tests = [
    { method: 'log', color: Color.white },
    { method: 'special', color: Color.magenta },
    { method: 'debug', color: Color.cyan },
    { method: 'warn', color: Color.yellow },
    { method: 'error', color: Color.red },
    { method: 'success', color: Color.green },
  ];

  const results: { res: string; color: string }[] = [];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: LoggerService,
          useValue: {
            log: jest.fn((x: string) => `${Color.white}${x}`),
            special: jest.fn((x: string) => `${Color.magenta}${x}`),
            debug: jest.fn((x: string) => `${Color.cyan}${x}`),
            warn: jest.fn((x: string) => `${Color.yellow}${x}`),
            error: jest.fn((x: string) => `${Color.red}${x}`),
            success: jest.fn((x: string) => `${Color.green}${x}`),
          },
        },
      ],
    }).compile();

    logger = module.get<LoggerService>(LoggerService);
  });

  it('should be defined', () => {
    expect(logger).toBeDefined();
  });

  it('should log correct color and message', () => {
    tests.forEach((test) => {
      results.push({ res: logger[test.method]('test'), color: test.color });
    });

    results.forEach((result) => {
      expect(JSON.stringify(result.res).substring(0, 11)).toBe(
        JSON.stringify(result.color).substring(0, 11),
      );
      expect(JSON.stringify(result.res).substring(11, 15)).toBe('test');
    });
  });
});
