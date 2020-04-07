// 所有的方法都可以实现返回数组下标的效果
// 第一种
let find1 = (arr, ele) => {
    let count = [];
    for(let i = 0; i < arr.length; ++i){
        if(arr[i] === ele){
            count.push(i);
        }
    }
    return count;
}
// let m = [1,2,3,5,5,6];
// console.log(find1(m, 5));

// 第二种
let find2 = (arr, ele,index = 0) => {
    let count = [];
    let active = true
    while(active){
        if(arr.indexOf(ele, index) !== -1){
            count.push(arr.indexOf(ele, index));
            index = arr.indexOf(ele, index) + 1;
        }else{
            active = false;
        }

    }
    return count;
}
// console.log(find2([1,2,3,5,5,6], 5,3));

// 第三种
let find3 = (arr, ele, index = arr.length - 1) => {
    let count = []
    let active = true
    while(active){
        if(arr.lastIndexOf(ele, index) !== -1){
            count.push(arr.lastIndexOf(ele, index));
            index = arr.lastIndexOf(ele, index) - 1;
        }else{
            active = false;
        }

    }
    return count;
}
// console.log(find3([1,2,3,5,5,6] , 5));

// 第四种
let find4 = (arr, ele) => {
    let count = [];
    let num = []
    for(let i = 0; i < arr.length; ++i){
        count[i] = arr[i];
    }
    while(count.findIndex( e => e === ele) !== -1){
        num.push(count.findIndex( e => e === ele) + num.length);
        count.splice(count.findIndex( e => e === ele), 1);
    }
    return num;
}
// console.log(m)
// console.log(find4([1,2,3,5,5,6], 5));

// 第五种 forEach、Array.from、map()都可以利用回调函数来实现记录
let find5 = (arr, ele) => {
    let count = [];
    arr.some((e,i) => {
        if(e === ele){
            count.push(i);
        }
    })
    return count;
}
console.log(find5([1,2,3,5,5,6], 2));