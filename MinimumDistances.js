function minimumDistances(a) {
    // Write your code here
let mdistance = [];

for( let i = 0; i<a.length; i++){
    for( let j = i+1; j<a.length; j++){
        if( a[i] == a[j]){
            let minimum = Math.abs(i-j);
            mdistance.push(minimum);
        }
    }
}

return mdistance.length?Math.min(...mdistance):-1;

}
