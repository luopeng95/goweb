function judgeScore(a){
    // 假设输入的分数是数字且不大于100
    if( a >= 70 && a < 80){
        console.log("一般");
    }else if( a >= 80 && a < 90){
        console.log("中等");
    }else if( a >= 60 && a <70){
        console.log("及格");
    }else if( a >=90){
        console.log("优秀");
    }else{
        console.log("不及格");
    }
}
judgeScore(70);