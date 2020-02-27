var mysql = require("mysql");
var dbname = "nodejsdbases";
var con   = mysql.createConnection({
    host: "localhost", // Server hostname
    user: 'root', // mysql server username
    password: '', // mysql server user password
    database: dbname
});
con.connect(function(con_error) {
    if(con_error) throw "Your have a connection error message";
    console.log("Connected created");
    var sql = "INSERT INTO studentusers (name, address) VALUES ?";
    var values = [
        ['John', 'Hightway 71'],
        ['Peter', 'Lowstreet 41'],
        ['Amy', 'Apple st 652']
    ];
    con.query(sql,[values], function(error, result) {
        if(error) throw error;
        console.log("Number of records inserted " + result.insertId); 
        // filedCount, affectedRows, insertId, serverStatus, warningCount, message, protoco141, changedRows
    });
});

