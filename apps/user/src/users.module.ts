import { Module } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { DatabaseModule, RmqModule } from 'lib/common';

@Module({
  imports: [
		MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
		DatabaseModule,
		RmqModule.register({
			name: 'NOTIFICATION',
		}),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService],
})
export class UsersModule {}
