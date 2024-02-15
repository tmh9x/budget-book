import { AuthService } from "./auth.service";
import { Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    googleAuth(): Promise<void>;
    googleAuthRedirect(req: any, res: any): void;
    googleLogin(): void;
    // googleAuthRedirect(req: any, res: Response): Promise<void>;
    getProfile(req: any): any;
