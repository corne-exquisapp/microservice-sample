import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AuthModule, RmqModule } from 'lib/common';
import { BILLING_SERVICE, MiscroserviceAppNames, NOTIFICATION } from '../../../lib/common/src/constants/services';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
	imports: [
		AuthModule,
		ConfigModule.forRoot({
			isGlobal: true,
			// validationSchema: Joi.object({
			// 	MONGODB_URI: Joi.string().required(),
			// 	PORT: Joi.number().required(),
			// }),
			envFilePath: './apps/order/.env',
		}),
		RmqModule.register({ name: MiscroserviceAppNames.BILLING_SERVICE }),
		RmqModule.register({ name: MiscroserviceAppNames.NOTIFICATION_SERVICE }),
	],
	controllers: [OrderController],
	providers: [OrderService],
})
export class OrderModule { }
