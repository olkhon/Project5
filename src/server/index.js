var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')




const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function(req, res) {
    res.send(mockAPIResponse)
})

//Configuring express to use body-parser as middle-ware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// designates what port the app will listen to for incoming requests

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})

// initialize dotenv

const dotenv = require('dotenv');
dotenv.config();

// initialize aylien

let AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

app.post("/sentiment", function(req, res) {
    const parseUrl = req.body.url;


    if (textapi) {
        textapi.sentiment({
                url: parseUrl
            },
            (err, resp) => {
                if (err === null) {
                    res.json({
                        msg1: resp.polarity,
                        msg2: resp.polarity_confidence
                    });
                } else {
                    const failedText = "Something went wrong!"
                    res.json({
                        message: failedText
                    })
                }
            }
        )
    }

});