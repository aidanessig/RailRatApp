require('dotenv').config();

const express = require('express')
const bodyParser = require('body-parser');
const twilio = require('twilio');
const app = express();
app.use(bodyParser.json());

app.use(express.static('../'));

// importing from utilities
const { railRatURL } = require('../js/utilities');

// getting twilio reqs from .env file
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_NUMBER
const client = require('twilio')(accountSid, authToken);

// handling the post request when submitting from form
app.post('/submit', (req, res) => {
    const trainNumber = req.body.trainNumber;
    const phoneNumber = req.body.phoneNumber;

    // Twilio code here
    client.messages
        .create({
            body: railRatURL(trainNumber),
            from: twilioNumber,
            to: '+14754001728'
        })
        .then(message => console.log(message.body))
        .catch(error => {
            console.error(error);
        });

    res.send({ message:'message received (node)'});
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
})