function circularArrayRotation(a, k, queries) {
    // Write your code here
for(let i = 0; i < k; i++){
    let temp = a.pop();
    a.unshift(temp);
}
return queries.map( v => a[v] );
}
