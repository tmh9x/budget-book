import {Controller, Get, Req, Res, UseGuards} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "@nestjs/passport";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}
    @Get('google')
    @UseGuards(AuthGuard('google'))
    async googleAuth() {}
    @Get('google/redirect')
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Req() req, @Res() res) {
        return this.authService.googleLogin(req, res);
    }
}
