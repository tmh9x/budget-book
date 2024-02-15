import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
export declare class UserService {
    getAllUsers(): User[];
    createUser(userData: any): User;
    validateGoogleUser(googleUser: any): Promise<User>;
    
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    createUser(userData: User): Promise<User>;
    findByGoogleId(googleId: string): Promise<User | null>;
}