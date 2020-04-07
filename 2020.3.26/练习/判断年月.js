// 假设输入的年月日格式为  2020.3.26  这样的格式
// let days = [31,28,31,30,31,30,31,31,30,31,30,31]
function judgeDate(x){
    let days;
    let arr = x.split(".");
    // console.log(arr);
    let day = 0;
    if ((+arr[0] % 4 === 0 && +arr[0] % 100 !== 0) || +arr[0] % 400 === 0){
        days = [31,29,31,30,31,30,31,31,30,31,30,31];
    }else{
        days = [31,28,31,30,31,30,31,31,30,31,30,31];
    }
    for (let i = 0; i < +arr[1] - 1; ++i){
        day += days[i];
    }
    return day + Number(arr[2]);
}

console.log(judgeDate("2018.10.26"))