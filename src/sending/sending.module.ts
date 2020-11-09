import { Module } from '@nestjs/common';
import { SendingService } from './sending.service';
import { EmailModule } from 'src/email/email.module';

@Module({
  imports: [EmailModule],
  providers: [SendingService]
})
export class SendingModule {}
