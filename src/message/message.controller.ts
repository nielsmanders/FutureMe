import { Controller, Post, Body } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
    constructor(
        private messageService: MessageService
    ) {}

    @Post()
    async createMessage(@Body() postData: any){
        return await this.messageService.create(postData);
    }
}
