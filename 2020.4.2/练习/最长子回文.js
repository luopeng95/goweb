// 双重for循环找出每一个回文数并记录下来
let huiwen = str => {
    let str1 = str.split("").reverse().join("");
    return str === str1 ? true : false;
}

let huiwen3 = str => {
    // 定义一个数组，第一位存储回文数字符串，第二位存储长度
    let ary = [0, 0];
    for(let i = 0; i < str.length; ++i){
        for(let j = i + 1; j <= str.length; ++j){
            // console.log(j)
            if(huiwen(str.slice(i, j)) && j -  i > ary[1]){
                    [ary[0], ary[1]] =[ str.slice(i, j), (j - i)]
            }
        }
    }
    return ary
}
let m = "aabayabacabayabab"
let n = "abcdefg";
console.log(huiwen3(m));
