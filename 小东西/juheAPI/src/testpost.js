let express = require("express");
let qs = require("querystring");
let http = require("http");


// let app = express();
// app.listen("60010",()=>{
//     console.log("serve start");
// })

let params = qs.stringify({page:0,num:20});

const req = http.request({
    hostname: 'tt.linweiqin.com',
    port: 80,
    path: '/api/tt/getArticles',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(params)
    }
  },(res)=>{
    console.log(res);
})
req.on("error",(e)=>{
    console.log(e)
})
req.write(params);
req.end();
// http.get("http://localhost:50024/test",(res)=>{
//     console.log(res.statusCode);
// })