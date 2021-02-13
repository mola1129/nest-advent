import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

// Strategy の定義
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super();
  }

  validate(username: string, password: string): boolean {
    if (username === 'admin' && password === 'password') {
      return true;
    } else {
      throw new UnauthorizedException();
    }
  }
}
