const express = require('express');
const cors = require('cors');
const emailjs = require ('@emailjs/nodejs');

require('dotenv').config();

const app = express();
// middleware
app.use(express.json());
app.use(cors());

var http = require('http');
var https = require('https');
var fs = require('fs');

var options = {
    key: fs.readFileSync('/etc/letsencrypt/live/mattkchan.xyz/privkey.pem', 'utf8'),
    cert: fs.readFileSync('/etc/letsencrypt/live/mattkchan.xyz/fullchain.pem', 'utf8')
}

app.post('/form', async(req, res) => {
    try {
        const params = {
            from_name: req.body.name,
            from_email: req.body.email,
            message: req.body.message
        }
        emailjs.send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, params, {
            publicKey: process.env.PUBLIC_KEY,
            privateKey: process.env.PRIVATE_KEY,
        })
        .then((response) => {
            console.log("Email sent successfully:", response.status, response.text);
            res.json({status: 200, message: "Email sent successfully" })
        })
        .catch((error) =>  {
            console.error("Failed to send email: ", error);
            res.status(500).json({ status: 500, message: "Failed to send email" });
        });
    } catch (error) {
        console.error("Error: ", error.message);
        res.status(500).json({ status: 500, message: "Internal Server Error" });    }
})

var httpsServer = https.createServer(options, app);

httpsServer.listen(5001);