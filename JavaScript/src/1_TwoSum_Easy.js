/**
 * Problem:
 * Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, 
 * and you may not use the same element twice. You can return the answer in any order.
 * 
 * Example:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: nums[0] + nums[1] == 9, so we return [0, 1].
 * 
 * 
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
   const twoSum = function(nums, target) {
    let map = {}
    for (i = 0; i < nums.length; i++) {
        const curr = nums[i];
        const diff = target - curr;
        const keys = Object.keys(map);
        const containsKey = keys.includes(diff.toString());
        if (containsKey) {
            return [map[diff], i];
        }
        map[curr] = i;
    }
    return null;
};

module.exports = twoSum;
