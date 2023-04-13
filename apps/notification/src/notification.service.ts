import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class NotificationService {
	private readonly logger = new Logger(NotificationService.name);

	notify(data: any) {
		this.logger.log('Notification sent...', data);
	}
}
