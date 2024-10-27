import { mixin } from "@nestjs/common";
import { IsEmail, Max, Min } from "class-validator";
import { max } from "rxjs";

export class CreateUserDto {
    @IsEmail()
    email:string;
    @Max(70)
    @Min(18)
    age:number
    
}
