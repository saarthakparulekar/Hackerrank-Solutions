process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    let word = input;
    solve(word)      // Writing output to STDOUT
}
function solve(word){
    let z = 0;
    let o = 0;
    for(let i = 0; i < word.length; i++){
        word[i]=='z'?z++:o++;
    }
    if(o % z == 0 && z < o){
        console.log('Yes');
    }else console.log('No');
}
