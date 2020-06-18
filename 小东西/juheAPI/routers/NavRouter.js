let http = require("http");
let NavRouter = require("express").Router();
let qs = require("querystring");



NavRouter.post("/news",(req,resnav)=>{
    let key = '8f3ab349a47544bebfed24d34591ff12';
    let type = req.body.type;
    let params = qs.stringify({type,key})
    console.log(req.body.type);
    // res.send("接口定义成功");
    // 判断type的类型再去聚合API获取对应的的数据
    let url = `http://v.juhe.cn/toutiao/index?type=${type}&key=${key}`;
    http.get(url,(res)=>{

    let datas = "";
    res.on("data",(data)=>{
        datas += data;
    })
    res.on("end",()=>{

        datas = JSON.parse(JSON.stringify(datas));
        // console.log(datas);
        resnav.send(datas)
    })
})

        // http.request({
        //     host:"v.juhe.cn",
        //     method:"POST",
        //     path:"/toutiao/index",
        //     headers:{
        //         'Content-Type':'application/x-www-form-urlencoded',
        //         // 'Content-Length':params.length
        //     }
        // },function(res){
        //     console.log(res);
        //     let datas = "";
        //     res.on("data",(data)=>{
        //         datas += data;
        //     })
        //     res.on("end",()=>{

        //         datas = JSON.parse(JSON.stringify(datas));
        //         // console.log(datas);
        //         resnav.send(datas)
        //     })
        // })
})


module.exports = NavRouter;