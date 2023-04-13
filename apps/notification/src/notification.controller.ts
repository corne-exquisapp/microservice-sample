import { Controller, Get, UseGuards } from '@nestjs/common';
import { EventPattern, Payload, Ctx, RmqContext } from '@nestjs/microservices';
import { JwtAuthGuard, RmqService } from 'lib/common';
import { NotificationService } from './notification.service';

@Controller()
export class NotificationController {
	constructor(
		private readonly rmqService: RmqService,
		private readonly notificationService: NotificationService
	) { }

	@EventPattern('notification.send')
	@UseGuards(JwtAuthGuard)
	async handleOrderCreated(@Payload() data: any, @Ctx() context: RmqContext) {
		this.notificationService.notify(data);
		this.rmqService.ack(context);
	}


}
