// 找出每个字符出现的次数再进行比较后输出结果
let calcStr1 = str => {
    let obj1 = {};
    for(let i = 0; i < str.length; ++i){
        let count = 1;
        for(let j = str.length - 1; j > i; --j ){
            if(str[i] === str[j]){
                ++count;
                str = str.slice(0, j) + str.slice(j+1,);
            }
        }
        // console.log(obj1);
        obj1[str[i]] = count;
    }
    return Math.max(...Object.values(obj1));
}
let m = "applepppppppp";
console.log(calcStr1(m));

// 先写一个函数返回字符某个字符出现的次数,可以直接遍历字符串，也可以把字符串转换成数组再进行计算
let tool = (str, n) => {
    let count = 0;
    for(let i = 0; i < str.length; ++i){
        str[i] === n ? ++count : null;
    }
    return count;
}
// console.log(tool(m, "p"));

let calcStr2 = str =>  {
    let obj1 = {};
    for(let j = 0; j < str.length; ++j){
        obj1[str[j]] = tool(str, str[j]);
    }
    return Math.max(...Object.values(obj1));
}
console.log(calcStr2(m))