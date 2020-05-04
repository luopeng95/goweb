function judgePrice(price, month){
    if(month >= 6 && month <= 9){
        console.log(`机票的真正价格是${price * 0.9}`)
    }else{
        console.log(`机票的真正价格是${price * 0.7}`)
    }
}
judgePrice(6000, 3);