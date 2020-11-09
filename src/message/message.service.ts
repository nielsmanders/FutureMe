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
        await this.messageRepository.save(message);
        return "Succesfully added";
    }
}
