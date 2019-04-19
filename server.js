var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, '/app/public')));

app.listen(PORT, () => console.log('app launched'));
