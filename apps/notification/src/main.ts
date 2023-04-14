import { NestFactory } from '@nestjs/core';

import { RmqService } from 'lib/common';
import { NotificationModule } from './notification.module';

async function bootstrap() {
	const app = await NestFactory.create(NotificationModule);
	const rmqService = app.get<RmqService>(RmqService);
	app.connectMicroservice(rmqService.getOptions());
	await app.startAllMicroservices();
}
bootstrap();
