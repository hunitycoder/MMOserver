import { ApiProperty } from "@nestjs/swagger";
import { IsEmail,  IsString } from "class-validator";

export class RegisterDto {
    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    password: string;
  }
  
  export default RegisterDto;