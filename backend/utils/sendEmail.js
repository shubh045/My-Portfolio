
const e = require('express');
const nodemailer = require('nodemailer');

const sendEmail = (subject, msg, sent_from, send_to, reply_to) => {

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: 587,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const options = {
        from: sent_from,
        to: send_to,
        subject: subject,
        html: msg,
        replyTo: reply_to
    }

    transporter.sendMail(options, (err, info) => {
        if(err){
            console.log(err);
        }else{
            console.log(info);
        }
    })
}

module.exports = sendEmail;