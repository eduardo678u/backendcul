import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { LoginAuthDto } from './login-auth.dto';
export class RegisterAuthDto extends PartialType(LoginAuthDto) {
  @IsString()
  @IsNotEmpty()
   username: string;

  @IsEmail()
  @IsNotEmpty()
   email: string;

  @IsString()
  @MinLength(13, { message: 'La contraseña debe tener al menos 12 caracteres.' })
  password: string;
}
