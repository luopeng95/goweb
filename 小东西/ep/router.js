let express = require("express");
let router = express.Router();
let bodyParser = require("body-parser");

// router.use(bodyParser.json());
let formdata = bodyParser.urlencoded({extended:false})
router.get("/del",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","application/json");
    res.send("test del")
})
router.get("/add",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","application/json");
    res.send("test add")
})
router.post("/img",(req,res)=>{
    console.log(req.body);
    res.send("请求已经收到");
})

module.exports = router;