import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
export declare class UsersService {
    private usersRepo;
    constructor(usersRepo: Repository<User>);
    findUserById(id: number): Promise<User>;
    findUserByEmail(email: string): Promise<User>;
    createUser(createUserDto: CreateUserDto): Promise<CreateUserDto & User>;
}
