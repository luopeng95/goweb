// sort排序
function rank(arr){
    arr.sort((a, b) => {
        return a > b ? 1 : -1;
    })
}
let n = [2,4,5,1,9,2]
rank(n);
// console.log(n)


// 冒泡排序
function rank2(nums){
    if(nums.length < 2){
        return nums;
    }
    for(var i = nums.length-1;i>0;i--){
        for(j = 0; j < i; j++){
            if(nums[j] > nums[j+1]){
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            }
        }
    }
}
let m = [2,4,5,1,9,2];


// 第三种
let rank3 = arr => {
    let nums = [];
    for(let i = arr.length - 1; i > -0; --i){
        let small = arr[i];
        let index = i;
        for(let j = 0; j < i; ++j){
            if(arr[j] < small){
                small = arr[j];
                index = j;
            }
        }
        nums.push(small);
        arr.splice(index, 1);
    }
    return nums;
}
let q = [0, 1, 100, 0, 20, 90, 10, 10, 100, 0, 20, 0];
// console.log(rank3(q));

// 快速排序
let rank4 = arr => {
    if(arr.length < 2){
        return arr;
    }else{
        let mid = arr[0];
        console.log(mid)
        let big = [];
        let small = [];
        for(let i = 1; i < arr.length; ++i){
            if(arr[i] >= mid){
                big.push(arr[i]);
            }else{
                small.push(arr[i]);
            }
        }
        console.log(small);
        console.log(big)
        return [].concat(rank4(small), mid, rank4(big));
    }
}
let p = [2,1,4,0];
console.log(rank4(p));