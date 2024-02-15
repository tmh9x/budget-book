import {Controller, Get, Req, Res, UseGuards} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "@nestjs/passport";
import { Response } from 'express';

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


  @Get('google')
  @UseGuards(AuthGuard('google'))
  googleLogin() {
    
  }

  // @Get('google/callback')
  // @UseGuards(AuthGuard('google'))
  // async googleAuthRedirect(@Req() req, @Res() res: Response) {
    
  //   const jwtToken = this.authService.generateToken(req.user);

    
  //   const redirectUrl = `http://3.72.72.216/=${jwtToken}`;
  //   res.redirect(redirectUrl);
  // } 

  // @UseGuards(AuthGuard('jwt')) 
  // @Get('profile')
  // getProfile(@Req() req) {
    
  //   return req.user;
  // }
}
