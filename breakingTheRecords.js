function breakingRecords(scores) {
    // Write your code here
let highest = scores[0];
let lowest = scores[0];
let high = 0;
let low = 0;
let tally = [];
for (let i = 0; i < scores.length; i++) {
    if (scores[i] > highest) {
        high++;
        highest = scores[i];
    } else if (scores[i] < lowest) {
        low++;
        lowest = scores[i];
    }
}
return tally = [high,low];
}
