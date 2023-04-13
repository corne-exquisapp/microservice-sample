import { Module } from '@nestjs/common';
import { AuthModule, RmqModule } from 'apps/common/src';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';

@Module({
	imports: [
		RmqModule.register({
			name: 'BILLING',
		}),
		AuthModule,
	],
	controllers: [BillingController],
	providers: [BillingService],
})
export class BillingModule { }
