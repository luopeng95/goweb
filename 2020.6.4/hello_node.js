// console.log("hello,world");
var http = require('http');
http.createServer(function(request,response){
    response.writeHead(200,{'content-Type':'tetx/html;charset=utf-8'});
    if(request.url !== '/favicon.ico'){
        console.log('访问');
        response.write('hello,world');
        response.end("访问结束啦");
    }
}).listen(8000);
console.log("Server running at http://127.0.0.1:8000/");
let url = require("url");
console.log(url);