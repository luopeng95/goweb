/**
 * 
 * @param {Array} arr :输入一个二维数组，返回一维数组
 */
let convert = arr => {
    let arr1 = [];
    // for(let i = 0; i < arr.length; ++i){
    //     // 第一种
    //     // arr1.push(...arr[i]);

    //     //第二种
    //     // arr1 = arr1.concat(arr[i]);

    // }

    // 倒序for循环输出
    for(let i = arr.length - 1; i > -1; --i){
        // 第三种
        // arr1.unshift(...arr[i]);

        // 第四种
        arr1.splice(0, 0, ...arr[i]);
    }

    return arr1;
}

let n = [[1,2,3], [4,5,6,7,8,9,10]];
console.log(convert(n));