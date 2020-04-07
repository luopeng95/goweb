 // 计算总分与平均分
 let total = (arr) => {
    let scores = 0;
    for( let i = 0; i < arr.length; ++i){
        scores += arr[i];
    }
    return [scores, scores/arr.length];
}
// console.log(total(10,9));

// 计算最高分和最低分
let maxMin = (arr) => {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return [max, min];
}
// console.log(maxMin(10,9));

let count = (...arr) =>{
    let score = {};
    let m = total(arr);
    let n = maxMin(arr);
    score.total = m[0];
    score.avg = m[1];
    score.high = n[0];
    score.low = n[1];
    return score;
}
let LP = count(90,100,99);
console.log(LP.low);