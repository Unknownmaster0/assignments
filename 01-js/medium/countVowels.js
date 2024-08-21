/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function isVowels(ch) {
  return (
    ch === "A" ||
    ch === "a" ||
    ch === "e" ||
    ch === "E" ||
    ch === "i" ||
    ch === "I" ||
    ch === "o" ||
    ch === "O" ||
    ch === "u" ||
    ch === "U"
  );
}

function countVowels(str) {
  // Your code here
  let cnt = 0;
  for (let char of str) {
    if (isVowels(char)) cnt++;
  }
  return cnt;
}

module.exports = countVowels;
