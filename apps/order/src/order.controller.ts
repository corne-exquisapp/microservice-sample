import { Body, Controller, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateOrderRequest } from './dto/create-order.request';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
	constructor(private readonly orderService: OrderService) { }

	@Post('create')
	async createOrder(
		@Body() orderDto: CreateOrderRequest,
		@Res() res: Response
	) {
		const message = await this.orderService.createOrder(orderDto);
		res.status(HttpStatus.OK).json({ message })
	}

	@Get()
	async getOrders(
		@Res() res: Response
	) {
		const data = this.orderService.getOrders();
		res.status(HttpStatus.OK).json({ data })
	}
}
