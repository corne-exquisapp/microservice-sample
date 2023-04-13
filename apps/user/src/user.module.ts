import { Module } from '@nestjs/common';
import { AuthModule, RmqModule } from 'apps/common/src';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
	imports: [
		RmqModule.register({
			name: 'USER',
		}),
		AuthModule,
	],
	controllers: [UserController],
	providers: [UserService],
})
export class UserModule { }
