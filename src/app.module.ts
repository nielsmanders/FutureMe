import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './message/message.entity';
import { MessageModule } from './message/message.module';
import { SendingModule } from './sending/sending.module';
import { ScheduleModule } from '@nestjs/schedule';
import { EmailModule } from './email/email.module';


@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'niels1999',
    database: 'test',
    entities: [Message],
    synchronize: true,
  }),
  MessageModule,
  SendingModule,
  EmailModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


