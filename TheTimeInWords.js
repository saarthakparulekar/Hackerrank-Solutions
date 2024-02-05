function timeInWords(h, m) {
    // Write your code here
let inWords = ["o' clock","one","two","three","four","five",
"six","seven","eight","nine","ten","eleven","twelve","thirteen",
"fourteen","quarter","sixteen","seventeen","eighteen","nineteen",
"twenty","twenty one","twenty two","twenty three","twenty four","twenty five",
"twenty six","twenty seven","twenty eight","twenty nine","half"];

if(m == 0){
    return (inWords[h] +" "+ inWords[m])
} else if(m <= 30){
    
        if(m == 1){
            return (inWords[m]+" minute past "+inWords[h])
        }
        else if(m == 15 || m == 30){
            return (inWords[m]+" past "+inWords[h])
        } else {
        return (inWords[m]+" minutes past "+inWords[h])
        }
    
} else if(m >= 30){
    let a = 60 - m;
    if(a == 15){
        return (inWords[a]+" to "+inWords[h+1])
    } else {
    return (inWords[a]+" minutes to "+inWords[h+1])
    }
}
}
