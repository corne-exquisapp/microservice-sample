import { Controller } from '@nestjs/common';
import { EventPattern, Payload, Ctx, RmqContext } from '@nestjs/microservices';
import { RmqService } from 'lib/common';
import { NotificationService } from './notification.service';

@Controller()
export class NotificationController {
	constructor(
		private readonly rmqService: RmqService,
		private readonly notificationService: NotificationService
	) { }

	@EventPattern('notification_send')
	async handleNotification(@Payload() data: any, @Ctx() context: RmqContext) {
		await this.notificationService.notify(data);
		this.rmqService.ack(context);
	}


}
