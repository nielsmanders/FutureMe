import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
    private transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
           type: 'OAuth2',
            //user: process.env.EMAIL,
            user: 'futuremeapplication@gmail.com',
            //pass: process.env.PASSWORD,
            clientId: process.env.CLIENTID,
            clientSecret: process.env.CLIENTSECRET,

            //clientId: '195207785424-r3hgifh4eifor6ffprmmkqums62bfbr1.apps.googleusercontent.com',
            //clientSecret: 'wQ9kkSiwoAFapUPUv2WYg9ah',

            refreshToken: '1//0f6Z3Z4laClhLCgYIARAAGA8SNwF-L9IrEDGpIp2MG7rn68WIyWvwC_O9dawIqo2hIK4k59Pm99Js0yWdVNIYPARchJ3PHRC9BFY',
            accessToken: 'ya29.a0AfH6SMDSY2ntj_Ie-8RQi2NEr5MgkQp0DKxROphI8qM7gg-tWGLZpjU6pXpBfPIGXqDAM_PONEUrJoxHlsx95zsN722TG648qsBVZIHgsg8KoyD_uzNA9SjpGa27wHKv25JK-84IfLgIVRBQRySlEk4ZI4pRRov53yc',
            //"scope": "https://mail.google.com/", 
            //"token_type": "Bearer", 
            //"expires_in": 3599, 
            //expires: '3599',
        },
     });

    //private transporter = nodemailer.createTransport({
       // service: 'gmail',
       // auth: {
       //     user: process.env.EMAIL,
        //    pass: process.env.PASSWORD
        //}
    //});

    sendEmail(to: string, subject: string, text: string){
        let mailOptions = {
            from: 'futuremeapplication@gmail.com',
            to,
            subject,
            text,
        };

        this.transporter.sendMail(mailOptions, function(err, data){
            if (err) {
                console.log('Error Occurs', err);
            } else {
                console.log('Email sent');
            }
        });
    }
}
