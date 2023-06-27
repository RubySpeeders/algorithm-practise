// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

//My solution:

export const findOdd = (xs: number[]): number => {
  // happy coding!
  let result = 0;
  const hash = new Map();
  for (let i = 0; i < xs.length; i++) {
    if (!hash.has(xs[i])) {
      hash.set(xs[i], 1);
    } else {
      hash.set(xs[i], hash.get(xs[i]) + 1);
    }
  }
  for (let [key, value] of hash.entries()) {
    if (value % 2 !== 0) {
      result = key;
    }
  }
  return result;
};
