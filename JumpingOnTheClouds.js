let e = 100;
let i = 0;
let n = c.length;
do {
  i = (i + k) % n;
  e -= c[i] ? 3 : 1;
} while (i != 0);

return e;
