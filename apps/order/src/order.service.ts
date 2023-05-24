import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { BILLING_SERVICE, MiscroserviceAppNames, NOTIFICATION } from '../../../lib/common/src/constants/services';
import { CreateOrderDto } from './dto/order.dto';

@Injectable()
export class OrderService {

	constructor(
		@Inject(MiscroserviceAppNames.BILLING_SERVICE) private billingMessageClient: ClientProxy,
		@Inject(MiscroserviceAppNames.NOTIFICATION_SERVICE) private notificationMessageClient: ClientProxy
	) { }


	async createOrder(orderDto: CreateOrderDto) {
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
