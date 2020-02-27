var mysqlserver = require("mysql");
var isConnect = mysqlserver.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});
isConnect.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
    isConnect.query(sql, function(err, result) {
        if(err) throw err;
        console.log("Result is: " + result);
    })
})
console.log(mysqlserver);