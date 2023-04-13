import { Module } from '@nestjs/common';
import { AuthModule, RmqModule } from 'apps/common/src';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';

@Module({
	imports: [
		RmqModule.register({
			name: 'NOTIFICATION',
		}),
		AuthModule,
	],
	controllers: [NotificationController],
	providers: [NotificationService],
})
export class NotificationModule { }
