import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { getConnection, getRepository } from "typeorm";
import { Message } from 'src/message/message.entity';
import { EmailService } from 'src/email/email.service';

@Injectable()
export class SendingService {
    private readonly logger = new Logger(SendingService.name);
    constructor(
        private emailService: EmailService
    ){}

  @Cron('45 * * * * *')
  async handleCron() {

    //var d = Math.floor(Date.now() / 1000);

    var moment = require("moment");
    var d = moment().startOf('day').unix(); //last midnight in local time

    this.logger.debug(new Date(d).valueOf());

    //this.logger.debug('Called when the current second is 45');
    
    const messages = await getRepository(Message)
    .createQueryBuilder("message")
    .where("message.sendAt = :sendAt", { sendAt: d })
    .getMany();

    this.logger.debug(messages);

    messages.forEach(message => {
        this.emailService.sendEmail(message.email, 'Subject', message.message);
    });
  }
}