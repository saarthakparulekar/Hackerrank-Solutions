function timeConversion(s) {
    // Write your code here
let m = s.replace("AM"," ");
let e = s.replace("PM"," ");
let con = parseInt(e) 
let rep = e.slice(2,8)
let sum = 0;
 


if(s.includes("PM")&& con < 12){
  sum = con +12;
  return( sum + rep)
} if ( s.includes("AM")&& con == 12){
  return( `00${rep} `)
} if ( s.includes("AM")&& con < 12){
  return(m)
} if ( s.includes("PM")&& con == 12){
  return(e)
}
}
