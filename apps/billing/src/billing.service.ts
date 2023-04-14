import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class BillingService {
	private readonly logger = new Logger(BillingService.name);

	createWallet(data: any) {
		this.logger.log('Wallet created!...', data);
	}
}
