// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.
//If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

//My solution
function search(nums: number[], target: number): number {
  const foundIndex = nums.findIndex((num) => num === target);
  return foundIndex >= 0 ? foundIndex : -1;
}
