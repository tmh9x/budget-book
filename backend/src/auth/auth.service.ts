import { Injectable } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AuthService {
    googleLogin(req: Request, res: Response){
        console.log(req.user);
    }
}
