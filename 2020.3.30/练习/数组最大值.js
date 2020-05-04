let arr = [1, 3, 5, 7];
let arr2 = [1, 5, 7, 9];

let count = (arr1, arr2) => {
    let max = Math.max(...arr1, ...arr2);
    let max1 = Math.max(...arr1);
    let max2 = Math.max(...arr2);
    return [max, max1, max2, max1 + max2];
}

console.log(count(arr, arr2));