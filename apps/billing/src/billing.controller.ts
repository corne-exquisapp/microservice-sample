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

	@EventPattern('billing_create')
	async handleCreatebilling(@Payload() data: any, @Ctx() context: RmqContext) {
		await this.billingService.createBilling(data);
		this.rmqService.ack(context);
	}

}
