import { Module } from '@nestjs/common';
import { AuthModule, RmqModule } from 'lib/common/src';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [RmqModule.register({
		name: 'BILLING_SERVICE',
	}),
		AuthModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
