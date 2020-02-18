var express = require("express");
var bodyParser = require("body-parser");
const ports = 4343;
var app = express();
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
var messages = [
    {name: "Tim", message: "Hi"},
    {name: "Root", message: "Hello"}
];

app.get("/messages", (req, res) => {
    res.send(messages);
});

app.post("/messages", (req, res) => {
    messages.push(req.body);
    console.log(req.body);
    res.sendStatus(200);
    
});
var server = app.listen(ports, () => {
    console.log('server is listening on port ', server.address().port)
});
