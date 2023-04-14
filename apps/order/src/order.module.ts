import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AuthModule, RmqModule } from 'lib/common';
import { BILLING_SERVICE } from './constants/services';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
	imports: [
		AuthModule,
		RmqModule.register({
			name: BILLING_SERVICE,
		}),
		ConfigModule.forRoot({
			isGlobal: true,
			// validationSchema: Joi.object({
			// 	MONGODB_URI: Joi.string().required(),
			// 	PORT: Joi.number().required(),
			// }),
			envFilePath: './apps/order/.env',
		}),
	],
	controllers: [OrderController],
	providers: [OrderService],
})
export class OrderModule { }
