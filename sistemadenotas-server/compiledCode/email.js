"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tassistant4@gmail.com',
        pass: '123lalaLa'
    }
});
const mailOptions = {
    from: 'tassistant4@gmail.com',
    to: '',
    subject: '',
    html: ''
};
function send(name, subject, content) {
    mailOptions.to = name;
    mailOptions.subject = subject;
    mailOptions.html = '<p>' + content + '</p>';
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err);
        else
            console.log(info);
    });
}
exports.send = send;
//# sourceMappingURL=email.js.map