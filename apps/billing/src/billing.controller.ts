import { Controller } from "@nestjs/common";
import { EventPattern, Payload, Ctx, RmqContext } from "@nestjs/microservices";
import { RmqService } from "lib/common";
import { BillingService } from "./billing.service";


@Controller()
export class BillingController {
	constructor(
		private readonly rmqService: RmqService,
		private readonly billingService: BillingService
	) { }

	@EventPattern('billing.wallet.create')
	async handleCreateWallet(@Payload() data: any, @Ctx() context: RmqContext) {
		this.billingService.createWallet(data);
		this.rmqService.ack(context);
	}

}
