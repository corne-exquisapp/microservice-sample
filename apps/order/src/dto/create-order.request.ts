import {
	IsNotEmpty,
	IsPhoneNumber,
	IsPositive,
	IsString,
} from 'class-validator';

export class CreateOrderRequest {
	@IsString()
	@IsNotEmpty()
	productName: string;

	@IsPositive()
	price: number;
}
