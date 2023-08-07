// A jail has a number of prisoners and a number of treats to pass out to them.
//  Their jailer decides the fairest way to divide the treats
// is to seat the prisoners around a circular table in sequentially numbered chairs.
// A chair number will be drawn from a hat. Beginning with the prisoner in that chair,
//  one candy will be handed to each prisoner sequentially around the table until all have been distributed.

// The jailer is playing a little joke, though. The last piece of candy looks like all the others,
//  but it tastes awful. Determine the chair number occupied by the prisoner who will receive that candy.

let n = 208526924;
let m = 756265725;
let s = 150817879;

// for (let i = 0; i < m; i++) {
//   if (p > n) {
//     p = 1;
//   }
//   p++;
// }
// console.log(p);
let rem = m % n;
if (rem > 1) {
  for (let i = 0; i < rem - 1; i++) {
    if (s > m) {
      s = 0;
    }
    s++;
  }
}

console.log(rem);
console.log(s);
