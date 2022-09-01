// https://leetcode.com/problems/roman-to-integer/

// ============ First attempt =========== //
// Thought process:
// loop through s
// if s[i] is not a key in romanNumerals, then return "invalid roman num containing s[i]"
// if s[i] is less than s[i-1], then continue to add value of keys in the object
// if s[i] is more than s[i-1], then get the value of s[i-1] - s[i]

const romanNumerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
console.log(romanNumerals.I);
console.log(romanNumerals["I"]);

const romanToInt = (s) => {
  int = 0;
  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in romanNumerals)) {
      return `Invalid Roman number containing ${s[i]}`;
    }
    if (i + 1 < s.length && romanNumerals[s[i]] < romanNumerals[s[i + 1]]) {
      int -= romanNumerals[s[i]];
    } else {
      int += romanNumerals[s[i]];
    }
  }
  return int;
};

console.log(romanToInt("III")); // 3
console.log(romanToInt("LVIII")); // 58 = 50 + 5 + 3
console.log(romanToInt("MCMXCIV")); // 1994 = 1000 + |(100-1000)| + (100-10) + (5-1)
// console.log(romanToInt("ABC"));
