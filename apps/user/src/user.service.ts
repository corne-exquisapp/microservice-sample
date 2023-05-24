import {
	Inject,
	Injectable,
	UnauthorizedException,
	UnprocessableEntityException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto, LoginUserDto } from './dto/user.dto';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { MiscroserviceAppNames } from 'lib/common/src/constants/services';

@Injectable()
export class UserService {
	constructor(
		@Inject(MiscroserviceAppNames.NOTIFICATION_SERVICE) private notificationClient: ClientProxy
	) { }

	async registerUser(createUserDto: CreateUserDto) {
		const user = createUserDto;

		await lastValueFrom(
			this.notificationClient.emit('notification.send', { user })
		);

		await lastValueFrom(
			this.notificationClient.emit('billing.wallet.create', { user })
		);

		return user;
	}

	async loginUser(loginUserDto: LoginUserDto) {
		const user = loginUserDto;




		// await lastValueFrom(
		// 	this.notificationClient.emit('notification.send', {
		// 		user,
		// 		Authentication: authentication,
		// 	})
		
		// );

		// await lastValueFrom(
		// 	this.notificationClient.emit('billing.wallet.create', {
		// 		user,
		// 		Authentication: authentication,
		// 	})
		// );

		return user;
	}



}
