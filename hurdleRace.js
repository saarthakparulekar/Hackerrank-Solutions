function hurdleRace(k, height) {
    // Write your code here
height.sort(function (a, b) {
  return b - a;
});

let j = 0;
if (height[0] > k) {
  j = height[0] - k;
}
 return j;
}
