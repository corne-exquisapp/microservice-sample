import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class NotificationService {
	
	async notify(data: any) {
		console.log(console.log('Notification recieved  =>', data));

	}
}