import { HttpException, Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';

// Simulación de una "base de datos" en memoria
const users: { email: string; password: string; [key: string]: any }[] = [];

@Injectable()
export class AuthService {
  constructor(
    private jwtService:JwtService
  ){}
  
  async register(userObject: RegisterAuthDto) {

    const { email, password } = userObject;
    

    
    const userExists = users.find((user) => user.email === email);
    if (userExists) {
      throw new HttpException('User already exists', 400);
    }

    const hashedPassword = await hash(password, 10);

    
    const newUser = { ...userObject, password: hashedPassword };
    users.push(newUser);

    return { message: 'User registered successfully', user: { email: newUser.email } };
  }

  
  async login(userObjectLogin: LoginAuthDto) {
    const { email, password } = userObjectLogin;

    
    const findUser = users.find((user) => user.email === email);
    if (!findUser) {
      throw new NotFoundException('User not found');
    }


    const isPasswordValid = await compare(password, findUser.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    
    return { message: 'Login successful', user: { email: findUser.email } };

    const payload = {id:findUser._id,name:findUser.name};
    const token = await this.jwtService.sign(payload)

    const data = {
      User:findUser,
      token,
    };
    return data;
  }
}
