import { User } from 'src/entity/user.entity';
export declare class UserService {
    getAllUsers(): User[];
    createUser(userData: any): User;
    validateGoogleUser(googleUser: any): Promise<User>;
}
