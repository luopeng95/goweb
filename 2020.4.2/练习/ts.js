// // // let name = str => {
// // //     let str1 = str[0];
// // //     let str2 = str.slice(1, str.indexOf(" "));
// // //     let str3 = str.slice(str.indexOf(" "))
// // //     // console.log(str1, str2, str3)
// // //     return str1.toUpperCase() + str2.toLowerCase()+ str3.toUpperCase();
// // // }
// // // let m = "abc dcv"
// // // // console.log(m[]);
// // // console.log(name(m));
// // let m ={n:1};
// // let n = [1,2,3]
// // console.log(...n);
// let n = "lwo";
// // console.log(n.slice(0,0));
// // let m = new Set(n);
// // console.log(m);
// // console.log(n.slice(7,))
// // n[0] = "我";
// n.replace( n[0],n[0].toUpperCase())
// console.log(n.replace( n[0],n[0].toUpperCase()));

// let obj = {age:1}
// obj["age"]++;
// console.log(obj);
let fn = arr => {
    let flag = arr.shift();
    for(let i = 0;  i < flag.length; ++i){
        temp = flag.slice(0, i);
        for(let j = 0; j < arr.length; ++j){
            if(!arr[j].startsWith(temp)){
                return flag.slice(0, temp.length - 1);
            }
        }
    }
    return flag;
}

console.log(fn(["text","texb","texc"]));