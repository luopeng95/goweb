// 质数的定义:质数又称素数。一个大于1的自然数，除了1和它自身外，不能被其他自然数整除的数叫做质数；否则称为合数

// 假设输入的数字是大于1的自然数，这里就不做整数和小于等于1 的判断了，判断整数可以用Number.isInteger（）返回值为true和false
function prime(x){
    if( x === 2 || x === 3){
        return console.log(`${x}是质数`);
    }else if( x % 2 === 0){
        return false;
    }else{
        
        for (let i = 3; i < x; i += 2){
            if(x % i === 0){
                return false;
            }
        }
        return console.log(`${x}是质数`);
    }

    

}

// prime(91);


// 打印100之间所有的质数使用上面的这个函数就可以解决了
for(let i = 2; i < 101; i++){
    prime(i);
}