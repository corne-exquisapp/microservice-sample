import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { OrderModule } from './order.module';

async function bootstrap() {
	const app = await NestFactory.create(OrderModule);
	app.setGlobalPrefix('api')
	app.useGlobalPipes(new ValidationPipe());
	const configService = app.get(ConfigService);
	const PORT = configService.get('PORT')

	console.log(`Server running on http://localhost:${PORT}/api`)
	await app.listen(PORT);
}
bootstrap();
