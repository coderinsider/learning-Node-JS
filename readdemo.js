var fs = require("fs");
var data = require("./readdata.json");
console.log(data.firstname);
fs.readFile("./readdata.json", "UTF-8", (error, data) => {
    var datas = JSON.parse(data);
    console.log(datas.firstname);
});