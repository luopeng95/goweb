let fs = require("fs");
let url = require("url");


fs.readFile("./test.txt","utf-8",function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
        data = "1234";
        console.log(data);
    }
})