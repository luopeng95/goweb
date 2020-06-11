let mysql = require("mysql");

let connetion = mysql.createConnection({
    host:"cdb-cogw2moe.cd.tencentcdb.com",
    user:"root",
    password:"luopeng9590",
    database:"toutiao",
    port:"10026",
})

connetion.connect((err,msg)=>{
    console.log(err);
    console.log(msg);
})

module.exports = connetion;