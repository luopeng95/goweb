function judgeNum(x){
    // 默认输入的是数字
    // 可以用object.prototype.tostring.call()来判断数据类型
    if( (x % 2) === 0 ){
        console.log(`${x}是偶数`);
    }else{
        console.log(`${x}是奇数`);
    }
}
judgeNum(9);