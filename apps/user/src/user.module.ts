import { Module } from '@nestjs/common';
import type { RedisClientOptions } from 'redis';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthModule, RmqModule } from 'lib/common';
import { ConfigModule } from '@nestjs/config';
import { CacheModule, CacheStore } from '@nestjs/cache-manager';
import { MiscroserviceAppNames } from 'lib/common/src/constants/services';
// import { redisStore } from 'cache-manager-ioredis-yet';
import * as redisStore from 'cache-manager-redis-store';

@Module({
	imports: [
		// MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
		// DatabaseModule,
		AuthModule,
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: './apps/user/.env'
		}),
		CacheModule.register(),
		RmqModule.register({ name: MiscroserviceAppNames.NOTIFICATION_SERVICE }),
	],
	controllers: [UserController],
	providers: [UserService]
})
export class UserModule { }
