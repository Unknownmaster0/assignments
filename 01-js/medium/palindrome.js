/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
function isAlphabeat(char) {
  return /^[a-zA-Z]$/.test(char);
}

function isPalindrome(str) {
  str = str.toLowerCase();
  const sz = str.length;
  let left = 0,
    right = sz - 1;
  while (left < right) {
    while (left < right && !isAlphabeat(str[left])) left++;
    while (left < right && !isAlphabeat(str[right])) right--;

    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

module.exports = isPalindrome;
