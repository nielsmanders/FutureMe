import { MessageService } from './message.service';
export declare class MessageController {
    private messageService;
    constructor(messageService: MessageService);
    createMessage(postData: any): Promise<string>;
}
