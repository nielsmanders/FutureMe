import { EmailService } from 'src/email/email.service';
export declare class SendingService {
    private emailService;
    private readonly logger;
    constructor(emailService: EmailService);
    handleCron(): Promise<void>;
}
