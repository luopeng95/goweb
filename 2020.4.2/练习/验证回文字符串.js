// 第一种,使用数组的reverse方法进行倒序然后比较
let huiwen = str => {
    let str1 = str.split("").reverse().join("");
    return str === str1 ? true : false;
}
let m = "我是我1我是我";
console.log(huiwen(m));

// 第二种：取中值，首末比较
let huiwen2 = str =>{
    let mid = Math.floor(str.length / 2);
    // str.length % 2 === 0 ? mid = str.length / 2 : mid = Math.floor(str.length / 2);
    for (let i = 0; i < mid; ++i){
        if (str[i] !== str[str.length - 1 - i]){
            return false;
        }
    }
    return true;
}
console.log(huiwen2("我是我我是我"))