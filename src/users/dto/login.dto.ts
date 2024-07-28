import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({description: 'The user email', example: "Jhon@gmail.com", required: true})
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(10, 15)
  @ApiProperty({description: "The password user, should have minimun 8 characters", required: true})
  password: string;
}