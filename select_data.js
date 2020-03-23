var mysql = require("mysql");
var dbname = "nodejsdbases";
var con   = mysql.createConnection({
    host: "localhost", // Server hostname
    user: 'root', // mysql server username
    password: '', // mysql server user password
    database: dbname
});
con.connect(function(err) {
    if(err) throw err;
    con.query("SELECT * from " + dbname, function(err, result, fields) {
        if(err) throw err;
        console.log(result);
    });
});