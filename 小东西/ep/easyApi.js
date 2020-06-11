let express = require("express");
let url = require("url");
let qs = require("querystring");
let router = require("./router")
// 实例化一个express
let app = express();

// 监听一个服务端口
app.listen(60025,()=>{
    console.log("server start");
})

// 定义一个api
app.get("/user/login",(req,res)=>{
    let info = qs.parse(url.parse(req.url).query);
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","application/json");
    console.log(info);
    if(info.name === "lp"){
        res.send({code:200,msg:"登陆成功",name:"lp"})
    }else{
        res.send({code:200,msg:"登陆成功",name:"else"})
    }
})

// 路由api
app.use("/test",router);

// 跨域
app.all("*",function(req,res,next){
    console.log("跨域代码");
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","application/json");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
})