var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodejsdbases"   
});
con.connect(function(error) {
    if(error) throw error;
    console.log("Connected!");
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log("Tables created successfully");
    });
})