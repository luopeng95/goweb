function judgeYear(x){
    let year = (x % 4 === 0 && x % 100 !== 0) || x % 400 === 0 ? "闰年" : "平年";
    console.log(`${x}年是${year}`);
}
judgeYear(2020);