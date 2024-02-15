import { UserService } from './user.service';
import { User } from '../entity/user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): User[];
    getAllUsers(): User[];
    createUser(userData: User): User;
}
