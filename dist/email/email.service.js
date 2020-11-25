"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const common_1 = require("@nestjs/common");
const nodemailer = require("nodemailer");
let EmailService = class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                type: 'OAuth2',
                user: 'futuremeapplication@gmail.com',
                clientId: process.env.CLIENTID,
                clientSecret: process.env.CLIENTSECRET,
                refreshToken: '1//0f6Z3Z4laClhLCgYIARAAGA8SNwF-L9IrEDGpIp2MG7rn68WIyWvwC_O9dawIqo2hIK4k59Pm99Js0yWdVNIYPARchJ3PHRC9BFY',
                accessToken: 'ya29.a0AfH6SMDSY2ntj_Ie-8RQi2NEr5MgkQp0DKxROphI8qM7gg-tWGLZpjU6pXpBfPIGXqDAM_PONEUrJoxHlsx95zsN722TG648qsBVZIHgsg8KoyD_uzNA9SjpGa27wHKv25JK-84IfLgIVRBQRySlEk4ZI4pRRov53yc',
            },
        });
    }
    sendEmail(to, subject, text) {
        let mailOptions = {
            from: 'futuremeapplication@gmail.com',
            to,
            subject,
            text,
        };
        this.transporter.sendMail(mailOptions, function (err, data) {
            if (err) {
                console.log('Error Occurs', err);
            }
            else {
                console.log('Email sent');
            }
        });
    }
};
EmailService = __decorate([
    common_1.Injectable()
], EmailService);
exports.EmailService = EmailService;
//# sourceMappingURL=email.service.js.map