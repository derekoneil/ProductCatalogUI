'use strict';

var http = require('http');
var express = require('express');
var path = require('path');
var PORT = process.env.PORT || 8085;
var app = express();

app.use(express.static('./public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/alpha.html'));
});
app.get('/products', function (req, res) {
    
      request('http://alpha-office-rest-service:30000/products', function (error, response, body) {
        console.log('error:', error); 
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
          res.end(body);
        });
});
app.listen(PORT, function () {
    console.log('listening on port ' + PORT)
});
