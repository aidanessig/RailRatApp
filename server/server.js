const express = require('express')
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.use(express.static('../'));

app.post('/submit', (req, res) => {
    const trainNumber = req.body.trainNumber;
    const phoneNumber = req.body.phoneNumber;

    // Twilio code here

    console.log(req.body);
    res.send({ message:'message received (node)'});
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
})