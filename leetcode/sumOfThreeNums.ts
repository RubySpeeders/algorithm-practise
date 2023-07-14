// Given an array and a target value, find if there is a triplet in the array whose sum is equal to the given target value. If there is such a triplet present in array, then print the triplet and return true. Otherwise return false.

// Examples:
// Input: array = [12, 3, 4, 1, 6, 9], target = 24
// Print Output: 12, 3, 9
// Function Output: true
// Explanation: There is a triplet (12, 3 and 9) present in the array whose sum is 24.

// Input: array = [1, 2, 3, 4, 5], target = 9
// Print Output: 5, 3, 1
// Function Output: true
// Explanation: There is a triplet (5, 3 and 1) present in the array whose sum is 9.

function foo(array, target) {
  const result: number[] = [];
  array.sort(function (a, b) {
    return a - b; // sort in ascending order
  });

  for (let i = 0; i < array.length; i++) {
    let anchor = array[i];
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      if (anchor + array[left] + array[right] === target) {
        result.push(anchor, array[left], array[right]);
        console.log(result);
        return true;
      } else if (anchor + array[left] + array[right] < target) {
        left++;
      } else if (anchor + array[left] + array[right] > target) {
        right--;
      }
    }
  }
}
