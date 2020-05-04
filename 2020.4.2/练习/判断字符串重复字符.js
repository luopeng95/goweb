// 利用SET集合的特性判断
let judgeRepeat1 = str => {
    let m = new Set(str);
    return m.size === str.length ? false : true;
}
let m = "input";
console.log(judgeRepeat1(m));

// 双重for循环比较处理
let judgeRepeat2 = str => {
    for(let i = 0; i < str.length; ++i){
        for(let j = i + 1; j < str.length; ++j){
            if(str[i] === str[j]){
                return true;
            }
        }
    }
    return false;
}
console.log(judgeRepeat2(m));

// 利用indexOf判断
let judgeRepeat3 = str => {
    let str2 = "";
    for(let i = 0; i < str.length; ++i){
        if(str2.indexOf(str[i]) === -1){
            str2 += str[i];
        }else{
            return true;
        }
    }
    return false;
}
console.log(judgeRepeat3(m))