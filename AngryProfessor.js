function angryProfessor(k, a) {
    // Write your code here
let count = 0;
for (let i = 0; i < a.length; i++) {
  if (a[i] <= 0) {
    count++;
  } 
}
return count>=k?'NO':'YES';
}
