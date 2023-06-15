// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

//My solution:

export function findUniq(arr: number[]): number {
  // Do the magic
  let result = 0;
  const hash = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!hash.has(arr[i])) {
      hash.set(arr[i], 1);
    } else {
      hash.set(arr[i], hash.get(arr[i]) + 1);
    }
  }
  for (let [key, value] of hash) {
    if (value === 1) result = key;
  }
  return result;
}
