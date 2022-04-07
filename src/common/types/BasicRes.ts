import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class BasicRes {
  @IsNumber()
  @IsNotEmpty()
  statusCode: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  message?: string;

  @IsOptional()
  @IsNotEmpty()
  data?: any;

  @IsString()
  @IsNotEmpty()
  path: string;

  @IsDateString()
  @IsNotEmpty()
  timestamp: string;
}
