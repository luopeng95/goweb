
function rank2(nums){
    if(nums.length < 2){
        return nums;
    }
    for(var i = nums.length-1;i>0;i--){
        console.log(i);
        let m = Array.from(nums);
        for(j = 0; j < i; j++){
            if(nums[j] > nums[j+1]){
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            }
        }
        // 也可以通过for循环记录数据相等的次数，如果相等的次数等于数组长度的话，也表明排序已经完成
        // 也可以使用sort来将已经排好序的函数跟它相比较值相等
        if(nums.every((e,i) => e === m[i]
        )){
            console.log("yes");
            return nums
        }
    }
}

rank2([1,2,3,4,5,6,8,7]);