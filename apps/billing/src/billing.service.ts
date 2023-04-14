import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class BillingService {

	async createBilling(data: any) {
		console.log(console.log('Billing create recieved  =>', data));
	}
}
