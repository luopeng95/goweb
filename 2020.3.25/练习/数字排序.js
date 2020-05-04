// 三个单独的数字进行排序比较可以用三个if进行判断所有的结果然后进行输出，但是这样子比较麻烦，所以把数字整合到数组里面再使用sort方法会比较简单，且可以输入任意数量的数字并进行排序

function method(x, y){
    let n = (x > y) ? -1 : 1 ;
    return n;
}

function rank(arr){
    let ary = arr.slice();
    ary.sort(method);
    return ary;
}

// 这里是手动添加的数组，也可以使用函数自动的输出数组进行验证
let arr = [90,50,40,6,74,3,4,981,321];
console.log(rank(arr));
// 打印的数组会被折叠起来，加个debugger让程序保持运行
debugger;