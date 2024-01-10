const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    }
});

const data = {
    from: 'r.roman.v8@gmail.com',
    to: 'ruben.roman@mayor.cl',
    subject: 'Nodemailer Project',
    text: 'Hi from your nodemailer project'
    // from: '',
    // to: '',
    // subject: '',
    // text: '',
    // html: '',
};


const sendEmail = () => {
    console.log({
        type: 'OAuth2',
        user: 'r.roman.v8@gmail.com',
        // user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
        accessToken: process.env.OAUTH_ACCESS_TOKEN,
        clientId: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    })
    return new Promise( ( resolve, reject ) => {
        transporter.sendMail(data, (err, info ) => {
            if( err ) {
                console.log( 'Error sending email', err );
                reject( err );
            }
        
            console.log('Email sent', info.messageId);
            resolve( info );
        });
    
    });
};

module.exports = {
    sendEmail,
}