// 传统去重:去除数组中所有重复的元素
let find1 = arr => {
    let num = arr.map(e => e);
    for(let i = 0; i < num.length; ++i){
        for(let j = num.length - 1; j > i; --j){
            if(num[i] === num[j]){
                num.splice(j, 1);
            }
        }
    }
    return num;
}
let m = [0, 1, 100, 0, 20, 90, 10, 10, 100, 0, 20, 0];
console.log(find1(m));

// 在新数组中去重：去除所有重复的元素
let find2 = arr => {
    let num = [];
    for(let i = 0; i < arr.length; ++i){
        num.indexOf(arr[i]) === -1 ? num.push(arr[i]) : null;
    }
    return num;
}
// console.log(m)
console.log(find2(m));

// 去除数组中某个指定值
// 第一种
let find3 = (arr, n) => {
    for(let i = arr.length - 1; i > -1; --i){
        if(arr[i] === n){
            arr.splice(i, 1);
        }
    }
}
let n = [0, 1, 100, 0, 20, 90, 10, 10, 100, 0, 20, 0];
find3(n, 0);
console.log(n);

// 去除数组中某个指定值
// 第二种:利用forEach、Array.from、some、filter、map他们所有元素都会执行回调函数特性来循环删除值或者在新数组中增加值,filter可以直接筛选
let find4 = (arr, n) => {
    let num = [];
    arr.map(e => {
        if (e !== n){
            num.push(e);
        }
    })
    return num;
}
let arr1 = [0, 1, 100, 0, 20, 90, 10, 10, 100, 0, 20, 0];
console.log(find4(arr1,0));