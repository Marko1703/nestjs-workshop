import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { CredentialsDto } from './dtos/credinteals-auth.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    registerUser(createUserDto: CreateUserDto): Promise<void>;
    loginUser(credentials: CredentialsDto): Promise<string>;
}
