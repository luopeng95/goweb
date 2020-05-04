function foo(){
    var a = b = 100;
}

foo();

console.log(window.b)
console.log(b)

console.log(window.a)
// console.log(a);