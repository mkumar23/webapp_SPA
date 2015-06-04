var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.listen(3050);

console.log("Server running on Port 3050"); 