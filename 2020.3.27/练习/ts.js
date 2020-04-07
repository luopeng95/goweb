// let json = [];
// for(let i = 0; i < 4;++i){
//     json[i] = i;
// }
// console.log(json[3]);

// let newPersonArr = [{}];
// let i = 0
// for (; i < 10; i++) {
//     console.log(i);//0
//     break;
// }
// console.log(i);//0


// for (var i = 0; i < 10; i++) {
//     continue
//     console.log(i)//无输出
//   }
//   console.log(i)//10

// for (var i = 1; i <= 10; i += 2) {
//     if (i <= 5) {
//       i++
//       continue
//     } else {
//       i -= 2
//       break
//     }
//     i--
//     console.log(i)//无输出
//   }
//   console.log(i)//5

// for (var i = 3; i < 12; i++) {
//     if (i < 3) {
//       i++
//       break
//     }
//     if (i > 9) {
//       i += 2
//       continue
//     }
//     i--
//   }
// console.log(i)//死循环无输出

// let a = 12;
// (a >= 0 && a <= 20) ? (a % 2 === 0 ?  a+=2 : null ): a -= 2
// console.log(a);

// let a = typeof (rqrqwer)
// console.log(a)

// let a = "10"
// a == 10 ? a++ : a--
// console.log(a)//11

// let b = "10"
// switch (b) {
//   case 10:
//     b++
//     break
//   default:
//     b--
// }
// console.log(b)//9

// let a = {
//     n: 1
//   }
// let b = a
//   a.x = a = {
//     n: 2
//   }
// console.log(a.x)//{n:2}
// console.log(b)//{n:1}

// var str = "abc123"
// var num = parseInt(str)
// if (num == NaN) {
//   console.log(NaN)
// } else if (num == 123) {
//   console.log(123)
// } else if (typeof num == "number") {
//   console.log("number")//输出number字符串
// } else {
//   console.log("str")
// }

// var a = 0
// var b = a
// b++
// console.log(a)//0
// var o = {}
// o.a = 0
// var b = o
// b.a = 10
// console.log(o.a)//10

// console.log(parseInt(1.3))//1
// console.log(1)//1
// console.log(isNaN(1))//false
// console.log(parseInt("1"))//1

// if (isNaN(NaN) == "") {
//     console.log("老胡")
//   } else {
//     console.log("前端")//前端
//   }

// let x = [1, 2, 3]
// let y = x
// let z = [4, 5, 6]
// y[0] = 10
// y = z
// z[1] = 20
// x[2] = z = 30
// console.log(x, y, z)//[10,2,30],[4,20,6],30

console.log(...(1,2,3,4,5,6));