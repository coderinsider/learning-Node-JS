const fs = require("fs");
const data = fs.readdirSync("C:/");
if(data.length > 0) {
    console.log(`Starting counting`);
    setTimeout(() => {
        console.log(data);
    }, 5000);
} else {

}
