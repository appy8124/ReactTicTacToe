
//Add dependencies

// yarn add express cors twilio
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);


const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(pino);



app.get('/send-text',(req,res) =>{
    const {recepient, msg} = req.query;

    client.messages.create({
        body: "this is a test",
        to: abc,
        from: def
    }).then((message) => {
      console.log(message.body);
      res.status(200).end();
    }).catch((error) => {
      res.status(500).end();
    });
});

app.post('/api/messages',(req,res) => {
    res.header('Content-Type', 'application/json');
    client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      x: req.body.x,
      o: req.body.o
    }).then(() => {
        res.send(JSON.stringify({ success: true }));
    }).catch(err => {
        console.log(err);
        res.send(JSON.stringify({ success: false }));
      });
});