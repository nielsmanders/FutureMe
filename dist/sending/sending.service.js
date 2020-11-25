"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SendingService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendingService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const typeorm_1 = require("typeorm");
const message_entity_1 = require("../message/message.entity");
const email_service_1 = require("../email/email.service");
let SendingService = SendingService_1 = class SendingService {
    constructor(emailService) {
        this.emailService = emailService;
        this.logger = new common_1.Logger(SendingService_1.name);
    }
    async handleCron() {
        var moment = require("moment");
        var d = moment().startOf('day').unix();
        this.logger.debug(new Date(d).valueOf());
        const messages = await typeorm_1.getRepository(message_entity_1.Message)
            .createQueryBuilder("message")
            .where("message.sendAt = :sendAt", { sendAt: d })
            .getMany();
        this.logger.debug(messages);
        messages.forEach(message => {
            this.emailService.sendEmail(message.email, 'Subject', message.message);
        });
    }
};
__decorate([
    schedule_1.Cron('45 * * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SendingService.prototype, "handleCron", null);
SendingService = SendingService_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [email_service_1.EmailService])
], SendingService);
exports.SendingService = SendingService;
//# sourceMappingURL=sending.service.js.map