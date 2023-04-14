import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AuthModule, RmqModule } from 'lib/common/src';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			validationSchema: Joi.object({
				AMPQ_CONNECTION_URL: Joi.string().required(),
				RABBIT_MQ_QUEUE: Joi.string().required(),
			}),
			envFilePath: './apps/billing/.env',
		}),
		RmqModule,
		AuthModule,
	],
	controllers: [BillingController],
	providers: [BillingService],
})
export class BillingModule { }
