// send mail using nodemailer
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ikhan77727@gmail.com',
        pass: 'kgwwtrppcxiewwie'
    }
});

const mailOptions = {
    from: 'ikhan77727@gmail.com',
    to: 'strongsoda2@gmail.com',
    cc: 'strongsoda3@gmail.com',
    subject: 'send mail via nodemailer',
    text: 'easy right'
};

transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    console.log(`Email sent! ${info.response}`)
});