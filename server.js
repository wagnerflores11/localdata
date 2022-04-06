const express = require('express');
const cors = require('cors');
var app = express()
const body = require('body-parser');
const bodyParser = require('body-parser');
const routes = require('./routes')


const port = process.env.PORT || 5000;



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes)
app.use(cors());



app.use(express.json())

app.listen(port, function(){
    console.log('Server start ' + port)
})