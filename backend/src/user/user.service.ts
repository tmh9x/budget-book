import { Injectable } from '@nestjs/common';
// import { User } from 'src/entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { FindOneOptions } from 'typeorm';
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
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

  async createUser(userData: User): Promise<User> {
    const newUser = this.userRepository.create(userData);
    return await this.userRepository.save(newUser);
  }

  async findByGoogleId(googleId: string): Promise<User | null> {
    return await this.userRepository.findOne({ where: { googleId } } as FindOneOptions<User>);
  }
  
    return ;
    
    };;
  




