const nodemailer = require('nodemailer');

const tranport = {

}

const transporter = nodemailer.createTransport({});

const data = {
    from: '',
    to: '',
    subject: '',
    text: '',
    html: '',

};

transporter.sendMail(data, (err, info ) => {
    if( err ) {
        console.log( 'Error sending email', err );
    }

    console.log('Email sent', info.messageId);
});