// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//My solution:
export function findAverage(array: number[]): number {
  // your code here
  return array.length === 0
    ? 0
    : array.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      ) / array.length;
}
