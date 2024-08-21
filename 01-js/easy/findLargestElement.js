/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let maxi = -10000000;
  for (let num of numbers) {
    maxi = Math.max(num, maxi);
  }
  if (maxi === -10000000) return undefined;
  return maxi;
}

module.exports = findLargestElement;
