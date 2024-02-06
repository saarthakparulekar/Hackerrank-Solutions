function workbook(n, k, arr) {
    // Write your code here
  let specialProb = 0;
    let page = 0;
    for(let i = 0; i < n; i++){
        let problems = arr[i];
        page++;
        for(let j = 1; j <= problems; j++ ){
            console.log(j);
            
            if(j === page){
                specialProb++;
            } 
            if(j % k === 0 && j != problems){
                page++;
            }
        }
    }
    return specialProb;
}
