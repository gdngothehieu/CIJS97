
// 1. Two Sum
// Description: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// Input:
// nums = [2, 7, 11, 15]
// target = 9
// Output:
// [0, 1]
// Explanation: Because nums[0] + nums[1] == 9.

const twoSum = (nums,target) => {
    // Time Complexity: O(n^2); Space complexity: O(n^2);
    for(let i = 0 ; i < nums.length;i++){
        for(let j = 0; j < nums.length;j++){
            if(nums[i] + nums[j] === target && nums[i] !== nums[j]){
                return [i,j];
            }
        }
    }

    return -1;
}
const twoSumNumber2 = (nums,target) => {
    // Time Complexity: O(n^2); Space complexity: O(n^2);
    //One-Pass Hash Table

    let set = {};
    for(let i = 0; i < nums.length;i++){
        if(target - nums[i]){

        }
    }
    return -1;
}
console.log(twoSum([2, 7, 11, 15], 9));



// 2. Contains Duplicate
// Description: Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Input:
// nums = [1,2,3,1]
// Output: True
const containDuplicate = (nums) => {
    // Time complexity: O(n); Space: O(n)
    let set = {};
    for(let i = 0; i < nums.length;i++){
        if(set[nums[i]]){
            return true;
        }
        set[nums[i]] = true;
    }
    return false;
}
// 3. Intersection of Two Arrays
// Description: Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique, and you may return the result in any order.
// Input:
// nums1 = [1,2,2,1]
// nums2 = [2,2]
// Output: [2]


// Input:
// nums1 = [4, 9, 5]
// nums2 = [9, 4, 9, 8, 4]
// Output:
// [9, 4]
// Explanation: Both arrays have the elements 4 and 9. The order of elements in the output does not matter.
