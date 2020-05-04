function sum(x){
    let count = 0;
    for( let i =1; i <= x; ++i){
        for( let j = 1; j <= i; ++j){
            count += j;
        }
    }
    return count;
}

console.log(sum(5));