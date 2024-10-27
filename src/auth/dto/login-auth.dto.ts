import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class LoginAuthDto {
  @IsEmail()
  email:string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
