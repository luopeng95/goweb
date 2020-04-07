function f1(x){
    if( x === 1){
        return 1;
    }else{
        return x * f1(x-1);
    }
}

function factorial(x){
    let sum = 0;
    if( x === 1){
        return sum += 1;
    }else{
        return sum += f1(x) + factorial(x - 1);
    }

}

console.log(factorial(4));