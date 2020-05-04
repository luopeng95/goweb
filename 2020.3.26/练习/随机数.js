// 假设 m ！== n，且m，n均为数字
function rand(m, n){
    let num;
    if( m > n){
        num = Number.parseInt(Math.random() * (m - n) + n);
    }else{
        num = Number.parseInt(Math.random() * (n - m) + m);
    }
    return num;
}
let m = 99;
let n = -20;
console.log(rand(m,n));
console.log(rand(m,n));
console.log(rand(m,n));
console.log(rand(m,n));
console.log(rand(m,n));
console.log(rand(m,n));
console.log(rand(m,n));
console.log(rand(m,n));
console.log(rand(m,n));
console.log(rand(m,n));
console.log(rand(m,n));
console.log(rand(m,n));
console.log(rand(m,n));
console.log(rand(m,n));
console.log(rand(m,n));
console.log(rand(m,n));
console.log(rand(m,n));