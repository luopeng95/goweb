let express = require("express");
let connection = require("../db/userdb.js");


let app = express();
app.listen("60025",()=>{
    console.log("服务开启");
})

let sql = "select * from test"
connection.query(sql,(err,result)=>{
    console.log(result);
})