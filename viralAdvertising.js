function viralAdvertising(n) {
    // Write your code here
 let share = 5;
let like = 0;
let total = 0;
for (let i = 0; i < n; i++) {
  like = Math.floor(share / 2);
  share = like * 3;
  total += like;
}
return total;
}
