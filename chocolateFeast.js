function chocolateFeast(n, c, m) {
    // Write your code here
    let total = 0;
    if(n < c){
        return total;
    } else {
        let bought = Math.floor(n/c);
        total += bought;
        let freeChoc = Math.floor(bought/m);
        let remainingWrapper = bought % m;
        total += freeChoc;
        do{
            remainingWrapper += freeChoc;
    freeChoc = Math.floor(remainingWrapper / m);
    total += freeChoc;
    remainingWrapper = remainingWrapper % m;
        } while (remainingWrapper >= m );
        
        return total;
}
}

//Failed 1 Test case, no idea why.
