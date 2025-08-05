/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const NUM_LEN = nums.length;
    for(let i=0; i < NUM_LEN;i++){
        for(let j=i+1; j < NUM_LEN; j++){
            if(nums[i] + nums[j] === target) return [i,j];
        }
    }
};