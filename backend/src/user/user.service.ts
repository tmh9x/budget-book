import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/user.entity';

@Injectable()
export class UserService {
  getAllUsers(): User[] {
    // Implementation to retrieve all users
  }

  createUser(userData: any): User {
    // Implementation to create a new user
  }
  async validateGoogleUser(googleUser: any): Promise<User> {
    
    const User={
      id: googleUser.sub,
      email: googleUser.email,
    
    };
  
    return ;
    
    };;
  
  }
