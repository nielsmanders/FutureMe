import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './message.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MessageService {
    constructor(
        @InjectRepository(Message)
        private messageRepository: Repository<Message>
    ) {}

    async create(message: any): Promise<string>{
        message.createdAt = new Date().getTime() / 1000;
        message.sendAt = new Date(message.sendAt).getTime() / 1000;
        await this.messageRepository.save(message);
        return "Succesfully added";
    }
}
