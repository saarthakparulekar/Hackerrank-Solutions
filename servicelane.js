function serviceLane(width, cases) {
    // Write your code here
let i = 0;
let j = 0;
let temp = 0;
let length = [];
let arr = [];
let meow = [];
for (let c = 0; c < cases.length; c++) {
  meow = cases[c];
  i = meow[0];
  j = meow[1];
  for (let a = i; a <= j; a++) {
    temp = width[a];
    arr.push(temp);
  }
  let b = Math.min(...arr);
  length.push(b);
  arr = [];
}
return length;
}
