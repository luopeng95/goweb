let obj = {
  name: "laoma",
  arr: ["a", "b", "c"]
}

let obj2 = obj;
let arr = obj.arr;

obj2.arr = ["a", "b", "c", "d"];
obj2.name = "laohu"

console.log(arr)//[a,b,c]
console.log(obj.name)//laohu
console.log(obj === obj2)//true
console.log(obj.arr === obj2.arr)//true
console.log(obj.arr === arr)//false

//抽个同学分析一下