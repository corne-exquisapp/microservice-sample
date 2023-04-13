import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from 'lib/common';

@Schema({ versionKey: false })
export class User extends AbstractDocument {
	@Prop()
	email: string;

	@Prop()
	password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);