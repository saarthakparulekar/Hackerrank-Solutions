function designerPdfViewer(h, word) {
    // Write your code here
let ch = 0;
let height = [];
for (let i = 0; i < word.length; i++) {
  ch = word.charCodeAt(i) - 97;
  height.push(h[ch]);
}
let op = Math.max(...height) * word.length;
return op;
}
