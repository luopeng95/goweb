
function bonus(year, salary){
    // year是年限，假设年限可以是小数
    let years = parseInt(year);
    let salarys = salary;

    if (years === 0){
        salary > 8000 ? salarys *= 1.2 :  salarys *= 1;
    }else if (years === 1){
        salary > 10000 ? salarys *= 1.7 :  salarys *= 1.5;
    }else{
        salary > 12000 ? salarys *= 3.2 :  salarys *= 3;
    }

    console.log(`年终奖是${salarys}`);
}

bonus(3.2, 30000)