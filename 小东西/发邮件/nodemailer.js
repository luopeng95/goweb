let nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host:"smtp.qq.com",
    port:"465",
    secure:true,
    auth:{
        user:"1913434404@qq.com",
        pass:"beucjgvffpvjejef",
    }
});

let mobileInfo = {
    from:"<1913434404@qq.com>",
    to:"1093857797@qq.com",
    subject:"这是邮件标题",
    text:"这个是邮件的内容",
};

transporter.sendMail(mobileInfo,(err,msg)=>{
    console.log(err);
    console.log(msg);
});