var express = require("express");
const ports = 4343;
var app = express();
app.use(express.static(__dirname));
var server = app.listen(ports, () => {
    console.log('server is listening on port ', server.address().port)
});
