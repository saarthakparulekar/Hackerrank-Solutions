function cutTheSticks(arr) {
    // Write your code here
arr = arr.sort((a, b) => a - b);
let numOfcuts = [];
while(arr.length){
    numOfcuts.push(arr.length);
    let min = arr[0];
    while(arr[0]-min == 0){
        arr.shift();
    }
}
return(numOfcuts);
}
