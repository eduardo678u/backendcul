import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService) {}

    @Post('register')
    registerUser(@Body()userObject: RegisterAuthDto) {
        return this.authService.register(userObject)
    }

    @Post('login')
    loginUser(@Body() userObjectLogin:LoginAuthDto){
        return this.authService.login(userObjectLogin)
    }
} 
