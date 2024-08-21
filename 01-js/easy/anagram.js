/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // means every letter in str1 must be also on str2.
  const hashmap = {};
  for (let char of str1) {
    if (hashmap[char] > 0) {
      hashmap[char]++;
    } else {
      hashmap[char] = 1;
    }
  }

  // checking second one on first string.
  for (let el of str2) {
    if (hashmap[el] == 0) return false;
    hashmap[el]--;
    if (hashmap[el] == 0) {
      delete hashmap[el];
    }
  }

  const size = Object.keys(hashmap).length;
  if (size) return false;

  // for (const [key, val] of Object.entries(hashmap)) {
  //   console.log(`key: ${key} -> value: ${val}`);
  // }

  return true;
}

// isAnagram("rail safety", "fairy tales");

module.exports = isAnagram;
