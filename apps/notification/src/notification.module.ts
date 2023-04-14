import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { AuthModule, RmqModule } from 'lib/common/src';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			validationSchema: Joi.object({
				AMPQ_CONNECTION_URL: Joi.string().required(),
				RABBIT_MQ_QUEUE: Joi.string().required(),
			}),
			envFilePath: './apps/notification/.env',
		}),
		RmqModule,
		AuthModule,
	],
	controllers: [NotificationController],
	providers: [NotificationService],
})
export class NotificationModule { }
