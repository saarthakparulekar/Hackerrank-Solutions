function catAndMouse(x, y, z) {
    let a =0;
    let b =0;
if (x < z) {
  a = z - x;
} else {
  a = x - z;
}
if (y < z) {
  b = z - y;
} else {
  b = y - z;
}

if (a < b) {
  return "Cat A";
} else if (b < a) {
  return "Cat B";
} else if (a == b) {
  return "Mouse C";
}

}
