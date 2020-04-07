let money = 1000;
let interestrate = 1.05;
let years = 0;

while ( money < 5000){
    money *= interestrate;
    ++years;
}

console.log(`从1000块增长到5000块需要${years}年`);

// console.log(1000*Math.pow(1.05, 32));

// 使用递归函数，传入本金和年的计数器，最后返回计数器
function count(money, s){
    if ( money >= 5000){
        return s;
    }else{
        return count( money * 1.05, s + 1);
    }
}

console.log(count(1000,0));