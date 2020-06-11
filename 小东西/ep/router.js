let express = require("express");
let router = express.Router();

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

module.exports = router;