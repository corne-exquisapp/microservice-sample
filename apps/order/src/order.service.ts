import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { BILLING_SERVICE } from './constants/services';
import { CreateOrderRequest } from './dto/create-order.request';

@Injectable()
export class OrderService {
	constructor(
		@Inject(BILLING_SERVICE) private billingMessageClient: ClientProxy,
	) { }


	async createOrder(orderDto: CreateOrderRequest, authentication: string) {
		try {
			
			// create order
			// create order
			// create order

			await lastValueFrom(
				this.billingMessageClient.emit('notification.send', {
					orderDto,
					Authentication: authentication,
				})
			);
			await lastValueFrom(
				this.billingMessageClient.emit('billing.create', {
					orderDto,
					Authentication: authentication,
				})
			);
		} catch (err) {
			throw err;
		}
	}
}
