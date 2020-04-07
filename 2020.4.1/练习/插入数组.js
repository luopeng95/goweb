let flat1 = arr => {
    for(let i = 0; i < arr.length; ++i){
        if(Array.isArray(arr[i])){
            return flat1(arr.flat());
        }
    }
    return arr
}
// console.log(flat1([[[[[1]]]]]))
let insert = (arr1, arr2, index = arr1.length) => {
    arr1.splice(index, 0, ...flat1(arr2));
}
let arr = [1, 5, 6, 7];
let arr2 = [2, 3, 4];

insert(arr, arr2,1);

console.log(arr)