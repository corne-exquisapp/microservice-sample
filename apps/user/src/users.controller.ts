import { Body, Controller, Post, Req } from '@nestjs/common';
import { CreateUserRequest } from './dto/create-user.request';
import { UsersService } from './users.service';

@Controller('auth/users')
export class UsersController {
	constructor(private readonly usersService: UsersService) { }

	@Post()
	async createUser(@Body() request: CreateUserRequest, @Req() req: any) {
		return this.usersService.createUser(request, req);
	}
}
