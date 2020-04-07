let flat1 = arr => {
    for(let i = 0; i < arr.length; ++i){
        if(Array.isArray(arr[i])){
            return flat1(arr.flat());
        }
    }
    return arr
}
let m = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(flat1(m));