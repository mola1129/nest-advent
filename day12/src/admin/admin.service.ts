import { Injectable } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminService {
  constructor(private readonly jwtService: JwtService) {}
  // アクセストークンの発行
  sign() {
    return { access_token: this.jwtService.sign({ isAdmin: true }) };
  }
}
