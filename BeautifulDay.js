// Function Description

// Complete the beautifulDays function in the editor below.

// beautifulDays has the following parameter(s):

// int i: the starting day number
// int j: the ending day number
// int k: the divisor
// Returns

// int: the number of beautiful days in the range

let i = 13;
let j = 45;
let k = 3;
let reverse = 0;
let bday = 0;
let div = 0;
if (i < j) {
  let total = j - i;
  for (let m = 0; m < total + 1; m++) {
    reverse = Number(String(i).split("").reverse().join(""));
    div = Math.abs(i - reverse) / k;
    if (Math.floor(div) - div == 0) {
      bday++;
    }
    i++;
  }
}
console.log(bday);
