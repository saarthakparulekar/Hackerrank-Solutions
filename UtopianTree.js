function utopianTree(n) {
    // Write your code here
let height = 0;
for (let i = 0; i <= n; i++) {
  if (i % 2 == 0) {
    height += 1;
  } else height += height;
}
return height;
}
