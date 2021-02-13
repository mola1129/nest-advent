import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login() {
    // アクセストークンを返す
    return this.adminService.sign();
  }

  // リクエストに含まれたアクセストークンを確認する
  @UseGuards(AuthGuard('jwt'))
  @Get('/status')
  status() {
    return true;
  }
}
