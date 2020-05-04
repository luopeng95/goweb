let find1 = arr => {
    let obj = {}
    let num = arr.map(e => e);
    // console.log(num)
    for(let i = 0; i < num.length; ++i){
        let count = 1;
        for(let j = num.length - 1; j > i; --j){
            if(num[i] === num[j]){
                ++count;
                num.splice(j, 1);
            }
        }
        obj[num[i]] = count;
    }
    return obj;
}
// 当数组中既有字符串1又有数字1的时候不能够出现两个属性名为"1"的属性
let arr = ["A","A","C","B","D","C","Z",1,2];
// console.log(find1(arr));

// 第二种
let find2 = (arr, ele) => {
    let count = [];
    arr.map((e,i) => {
        if(e === ele){
            count.push(i);
        }
    })
    return count.length;
}

let find3 = arr => {
    let obj = {};
    for (let i = 0; i < arr.length; ++i){
        obj[arr[i]] = find2(arr, arr[i]);
    }
    return obj
}
console.log(find3(arr));