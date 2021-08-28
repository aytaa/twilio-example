require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID ;
const authToken = process.env.TWILIO_ACCOUNT_AUTH ;

const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'Merhaba Dünyalı ben dostum  :) ',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+905413088266'
    })
    .then(message => console.log('Mesaj ID' + message.sid))
    .done();
