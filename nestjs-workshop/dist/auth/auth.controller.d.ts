import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { CredentialsDto } from './dtos/credinteals-auth.dto';
import { Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    registerUser(createUserDto: CreateUserDto): Promise<void>;
    loginUser(credentials: CredentialsDto, res: Response): Promise<void>;
}
