// function findE(nums, a, index){
//     let arr = [];
//     let active = true
//     while(active){
//         if(nums.indexOf(a, index) !== -1){
//             arr.push(nums.indexOf(a, index));
//             index = nums.indexOf(a, index) + 1;
//         }else{
//             active = false;
//         }
//     }
//     return arr;
// }

// let n = [1,2,3,4,5,6,7,8,9,8,7,4,5,2,0,4,3,6];
// let m = []
// let b = [4,4,4,4,4,4]
// console.log(findE(b, 4, 0))
// let n = [1,2,3,4,5]
// for(let i = 0;  i < n.length - 1; i++){
//     console.log(n[i]);
// }
// let n = new Number(1);
// // for(let i = 0; i < n.length; i++){
// //     console.log(i);
// // }
// console.log(n.length);

// let arr = [1,2,3];
// // let arr2 = Array.from(arr);
// // console.log(arr);
// // console.log(arr2);

// // arr[0] = [2,3];
// // console.log(arr2);

// let count = 0;
// arr.every(e => {
//     if(e === 2){
//         ++count;
//         console.log(count);
//     }
// })
// console.log(count)
// function aaa(arr, ele){
//     let co = 0;
//     arr.forEach(e => {
//         if(e === ele){
//             co++;
//         }
//     })
//     return co;
// }

// console.log(aaa([1,1,3], 1))

// let m = [1,2,3]
// let arr = Array.from(m, (e, i) => {
//     if(e === 1){
//         return i ** 2
//     }
// })
// console.log(arr)

// let arr = [1,2,3,4,4,5,5];
// function fin(arr,ele){
//     arr.every((e, i) => {
//         console.log(e, i);
//     })
// }
// fin(arr,1);
// console.log([].concat([0],1,2,[4]))

// let n = [1,2,3]
// let m = [1,2,4]
// // n.splice(0, 0, [4,5,6])
// // console.log(n)
// // console.log([1,2,3] === [1,2,3]);
// console.log(n.every((e,i) => {
//     return e === m[i];
// }));

console.log(Math.max(["1","2"]))