import {
	IsNotEmpty,
	IsNumber,
	IsPhoneNumber,
	IsPositive,
	IsString,
} from 'class-validator';

export class CreateOrderDto {
	@IsString()
	@IsNotEmpty()
	productName: string;

	@IsPositive()
	@IsNumber()
	price: number;
}

export interface IOrder {
	productName: string;
	price: number;
}