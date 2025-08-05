/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const NUM_LEN = nums.length;
    const OBJ_REF = {};
    for(let i=0; i < NUM_LEN;i++){
        OBJ_REF[nums[i]] = i;
    }
    for(let i=0; i < NUM_LEN;i++) {
        const required = target - nums[i];
        if(OBJ_REF[required] && i !== OBJ_REF[required]) return [i, OBJ_REF[required]]
    }
    return [0,0];
};