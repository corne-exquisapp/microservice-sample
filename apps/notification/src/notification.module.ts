import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';

import { AuthModule, RmqModule } from 'lib/common/src';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			validationSchema: Joi.object({
				RABBIT_MQ_URI: Joi.string().required(),
				RABBIT_MQ_BILLING_QUEUE: Joi.string().required(),
			}),
		}),
		RmqModule,
		AuthModule,
	],
	controllers: [NotificationController],
	providers: [NotificationService],
})
export class NotificationModule { }
