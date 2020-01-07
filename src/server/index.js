// initialize dotenv

const dotenv = require('dotenv');
dotenv.config();

// initialize aylien

let AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});




var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const aylienAPIResponse = require('./aylienAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
})


app.get('/test', function(req, res) {
    res.send(mockAPIResponse)
})

app.get('/aylien', function(req, res) {
    res.send(aylienAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})