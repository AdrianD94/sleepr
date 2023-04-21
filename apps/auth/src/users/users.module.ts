import { DatabaseModule } from '@app/common';
import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { UserDocument, UserSchema } from './models/user.schema';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';

@Module({
  imports: [
    DatabaseModule, DatabaseModule.forFeature([{ name: UserDocument.name, schema: UserSchema }]),
    LoggerModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService]
})
export class UsersModule {}
