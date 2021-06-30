let express = require("express");
let NavRouter = require("../routers/NavRouter.js");
let bodyParser = require("body-parser");
let cors = require("cors");
let app = express();
let fs = require("fs");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.listen("50024", () => {
  console.log("服务开启");
});
app.use("/data", NavRouter);
app.get("/test", (req, res) => {
  // console.log(req);
  res.send("test ok");
});
app.get("/test2", (req, res) => {
  // console.log(req);
  res.send("test ok2");
});
app.get("/test3", (req, res) => {
  // console.log(req);
  res.send("test ok3");
});

app.get("/dist", function(request, response) {
  console.log(request.url)
  if (request.url.startsWith('/static/css') || response.url.startsWith('/static/js')) {
    fs.readFile('../' + request.url, (err, data) => {
      res.end(data);
      return;
    })
  }
  fs.readFile("../dist/"+request.path.substr(1),function(err,data){
       // body
       if(err){
           console.log(err);
           //404：NOT FOUND
           response.writeHead(404,{"Content-Type":"text/html"});
       }
       else{
           //200：OK
           response.writeHead(200,{"Content-Type":"text/html"});
           response.write(data.toString());
       }
       response.end();
   });
});