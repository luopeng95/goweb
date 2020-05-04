function prices(gasoline, liters){
    // gasoline表示汽油编号，liters表示加多少升
    let price = liters;

    if( gasoline === 92){
        liters >= 20 ? price *= 5.9 : price *= 6;
    }else if(gasoline === 97){
        liters >= 30 ? price *= 6.95 : price *= 7;
    }else{
        return console.log(`汽油编号输入有误`);
    }

    console.log(`加的是${gasoline}号汽油，加油${liters}升，应付金额${price}`);
}
prices(99 , 50);
