import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { config } from 'dotenv';

import { Injectable } from '@nestjs/common';

config();

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {

constructor() {
    super({
    clientID: '132404688097-uo5f8qildj6090pph5asq52v7ffhmslp.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:3000/auth/google/redirect',
    scope: ['email', 'profile'],
    });
}

async validate (accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
    const { name, emails, photos } = profile
    const user = {
    email: emails[0].value,
    firstName: name.givenName,
    lastName: name.familyName,
    picture: photos[0].value,
    accessToken
    }
    done(null, user);
}
}