var mysql = require("mysql");
var con   = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodejsdbases"
});
con.connect(function(err) {
    if(err) throw err;
    console.log("Connection conntected");
    // Database condition exits
    //var sql = "CREATE TABLE studentusers (id int NOT NULL AUTO_INCREMENT, name VARCHAR(255), address VARCHAR(255), PRIMARY KEY(id))";
    var sql = "INSERT INTO studentusers (name, address) VALUES ('company Inc', 'Highway 37')";
    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log("1 Record inserted");
    })
})