import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RmqContext, RmqOptions, Transport } from '@nestjs/microservices';

@Injectable()
export class RmqService {
	constructor(private readonly configService: ConfigService) { }

	getOptions(queue?: string, noAck = false): RmqOptions {
		const rabitQueue = this.configService.get<string>(`RABBIT_MQ_QUEUE`);
		console.log(`${rabitQueue} => Microservice Started!`);
		return {
			transport: Transport.RMQ,
			options: {
				urls: [this.configService.get<string>('AMPQ_CONNECTION_URL')],
				queue: rabitQueue,
				noAck,
				persistent: true,
			},
		};
	}

	ack(context: RmqContext) {
		const channel = context.getChannelRef();
		const originalMessage = context.getMessage();
		channel.ack(originalMessage);
	}
}
