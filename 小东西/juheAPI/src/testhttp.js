let express = require("express");
let NavRouter = require("../routers/NavRouter.js")
let bodyParser = require("body-parser");
let cors = require("cors");
let app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.listen('50024',()=>{
    console.log("服务开启");
})

app.use("/data",NavRouter)


app.get("/test",(req,res)=>{
    console.log(req);
    res.send("test ok")
})