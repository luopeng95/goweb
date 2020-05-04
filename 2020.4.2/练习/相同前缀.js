let judgePredix = arr => {
    switch(arr.length){
        case 0:
            return null;
        case 1:
            return arr[0];
    }
        let ans = arr[0];
        for(let i = 1; i < arr.length; ++i){
            for(let j = 0; j < arr[0].length && arr[i].length; ++j){
                if (arr[0][j] !== arr[i][j]){
                    ans = ans.slice(0, j);
                    break;
                }
            }
            // 如果为空，直接返回
            if(!ans){
                return null;
            }
        }
        return ans;
    }
let arr1 = ["log","lo","loh"];
console.log(judgePredix(arr1));