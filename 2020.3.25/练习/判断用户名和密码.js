function judgeLogin(name, password){
    if( name === 'admin'){
        if( password === 123456){
            console.log(`用户登录成功`);
            return true;
        }else{
            console.log(`密码错误`);
            return false;
        }
    }else{
        console.log(`用户名错误`);
        return false;
    }
}

console.log(judgeLogin('admin', 123456));