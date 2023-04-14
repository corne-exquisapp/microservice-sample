import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { User } from 'apps/user/src/schemas/user.schema';
import { lastValueFrom } from 'rxjs';
import { BILLING_SERVICE, MiscroserviceAppNames, NOTIFICATION } from './constants/services';
import { CreateOrderRequest } from './dto/create-order.request';

@Injectable()
export class OrderService {

	constructor(
		@Inject(MiscroserviceAppNames.BILLING_SERVICE) private billingMessageClient: ClientProxy,
		@Inject(MiscroserviceAppNames.NOTIFICATION_SERVICE) private notificationMessageClient: ClientProxy
	) { }


	async createOrder(orderDto: CreateOrderRequest) {
		try {

			// create order logic
			// create order logic
			// create order logic
			// create order logic
			// create order logic

			await lastValueFrom(
				this.notificationMessageClient.emit('notification_send', orderDto)
			);
			await lastValueFrom(
				this.billingMessageClient.emit('billing_create', orderDto)
			);

			return 'Order created!'
		} catch (err) {
			throw err;
		}
	}

	getOrders() {
		return { orders: [] }
	}


}
