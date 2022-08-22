const http = require('http');
const express = require('express');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

var app = express();
app.get('', function (req, res) {
  res.sendFile('Calculator.html', { root: __dirname })
});

app.listen(port);
console.log('Server started at http://localhost:' + port);



