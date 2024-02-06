function libraryFine(d1, m1, y1, d2, m2, y2) {
    // Write your code here
let fine = 0;

if (d1 <= d2 && m1 <= m2 && y1 <= y2 || y1 < y2) {
  return(fine);
} else if (d1 > d2 && m1 == m2) {
  fine = (d1 - d2) * 15;
} else if (m1 > m2 && y1 == y2) {
  fine = (m1 - m2) * 500;
} else if (y1 > y2) {
  fine = 10000;
}
return fine;
}
