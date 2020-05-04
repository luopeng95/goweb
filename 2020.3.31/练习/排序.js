function rank(arr){
    arr.sort((a, b) => {
        return a > b ? 1 : -1;
    })
}
let n = [2,4,5,1,9,2]
rank(n);
console.log(n)


function rank2(nums){

    if(nums==null||nums.length<2){
                return nums;
            }
    for(var i = nums.length-1;i>0;i--){
        for(j = 0;j<i;j++){
            if(nums[j]>nums[j+1]){
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            }
        }
    }
}
let m = [2,4,5,1,9,2];
for(let i of m){
    console.log(i);
}