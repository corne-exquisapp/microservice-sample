import {
	Inject,
	Injectable,
	UnauthorizedException,
	UnprocessableEntityException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from './users.repository';
import { CreateUserRequest } from './dto/create-user.request';
import { User } from './schemas/user.schema';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class UsersService {
	constructor(
		private readonly usersRepository: any,
		@Inject('NOTIFICATION') private notificationClient: ClientProxy,
	) { }

	async createUser(request: CreateUserRequest, authentication: any) {
		await this.validateCreateUserRequest(request);
		const user = request

		await lastValueFrom(
			this.notificationClient.emit('notification.send', {
				user,
				Authentication: authentication,
			})
		);
		await lastValueFrom(
			this.notificationClient.emit('billing.wallet.create', {
				user,
				Authentication: authentication,
			})
		);

		return user;
	}

	private async validateCreateUserRequest(request: CreateUserRequest) {
		let user: User;
		try {
			user = await this.usersRepository.findOne({
				email: request.email,
			});
		} catch (err) { }

		if (user) {
			throw new UnprocessableEntityException('Email already exists.');
		}
	}

	async validateUser(email: string, password: string) {
		const user = await this.usersRepository.findOne({ email });
		const passwordIsValid = await bcrypt.compare(password, user.password);
		if (!passwordIsValid) {
			throw new UnauthorizedException('Credentials are not valid.');
		}
		return user;
	}

	async getUser(getUserArgs: Partial<User>) {
		return this.usersRepository.findOne(getUserArgs);
	}
}
