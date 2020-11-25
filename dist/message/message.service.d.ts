import { Message } from './message.entity';
import { Repository } from 'typeorm';
export declare class MessageService {
    private messageRepository;
    constructor(messageRepository: Repository<Message>);
    create(message: any): Promise<string>;
}
