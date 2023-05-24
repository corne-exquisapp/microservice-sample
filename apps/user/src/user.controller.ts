import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { CreateUserDto, LoginUserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
	constructor(private readonly usersService: UserService) { }

	@Post('register')
	async registerUser(
		@Res() res: Response,
		@Body() body: CreateUserDto
	) {
		const data = await this.usersService.registerUser(body);
		res.status(HttpStatus.CREATED).json({ data });
	}


	@Post('login')
	async loginUser(
		@Res() res: Response,
		@Body() body: LoginUserDto
	) {
		const data = await this.usersService.loginUser(body);
		res.status(HttpStatus.OK).json({ data });
	}


}
