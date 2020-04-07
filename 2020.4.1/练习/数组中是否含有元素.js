// 第一种
function find1(arr, ele){
    for(let i = 0; i < arr.length; ++i){
        if(arr[i] === ele){
            return true;
        }
    }
    return false;
}
let m = [1,2,3,4,5]
console.log(find1(m, 2))

// 第二种
let find2 = (arr, ele) => {
    if(arr.indexOf(ele) === -1){
        return false;
    }else{
        return true
    }
}
console.log(find2(m, 6))
// 第三种
let find3 = (arr, ele) => {
    return arr.lastIndexOf(ele) === -1 ? false : true;
}
console.log(find3(m, 0))

// 第四种
let find4 = (arr, ele) => {
    return arr.find(e => e === ele) ? true : false;
}
console.log(find4([], 2));

// 第五种
let find5 = (arr, ele) => {
    return arr.findIndex(e => e === ele) === -1 ? false : true;
}
console.log(find5(m, 1))

// 第六种
let find6 = (arr, ele) => {
    return arr.some(e => e === ele);
}
console.log(find6(m , 1))

// 第七种
let find7 = (arr, ele) => {
    return arr.filter(e => e === ele).length === 0 ? false : true;
}
console.log(find7(m, 1))