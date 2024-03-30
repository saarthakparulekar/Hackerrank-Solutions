function pickingNumbers(a) {
    // Write your code here

let arr = [];
for(let i =0; i < a.length; i++){
    let count = 0;
    for(let j = 0; j < a.length; j++){
        if(a[j]-a[i] == 0 || a[j]-a[i] == 1){
            count++;
        }
    }
    arr.push(count);
}
return Math.max(...arr);
}
