import { IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';

export class BasicReq {
  @IsString()
  @IsNotEmpty()
  user: string;

  @IsOptional()
  @IsObject()
  @IsNotEmpty()
  data?: Record<string, any>;
}
