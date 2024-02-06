function equalizeArray(arr) {
    // Write your code here
arr.sort(function (a, b) {
  return a - b;
});
console.log(arr);
let duplicate = [];

for (let i = 0; i < arr.length; i++) {
  let count = 1;
  let j = i + 1;
  while (arr[i] == arr[j]) {
    count++;
    j++;
  }
  duplicate.push(count);
}


let max = Math.max(...duplicate);
let numDeletions = arr.length - max;

if (max > 1) {
  return numDeletions;
} else {
  return arr.length - 1;
}
}
