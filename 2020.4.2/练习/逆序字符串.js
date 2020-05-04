// 转换数组得到
let revers = str => {
    return str.split("").reverse().join();
}

// for循环得到新字符串,正序倒序都可以
let revers1 = str => {
    let str1 = "";
    for(let i = 0;  i < str.length; ++i){
        str1 = str[i] + str1;
    }
    return str1
}
console.log(revers1("hello"))

// 调换位置
let revers2 = str => {
    let str2;
    let mid;
    if(str.length % 2 === 0){
        mid = str.length  / 2;
        str2 = "";
        for(let i = mid - 1; i > -1; --i){
            str2 = str[str.length - i - 1] + str2 + str[i];
        }
    }else{
        mid = parseInt(str.length / 2);
        str2 = str[mid];
        for(let i = mid - 1; i > -1; --i){
            str2 = str[str.length - i - 1] + str2 + str[i];
        }

    }
    return str2;
}
console.log(revers2("hello")); 