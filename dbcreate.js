var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

con.connect(function(err) {
    if(err) throw err;
    console.log("Connected to Server");
    con.query("CREATE DATABASE nodejsdbases", function(err, result) {
        if(err) throw err;
        console.log("Created Databased");
    });
})