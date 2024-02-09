function gradingStudents(grades) {
    // Write your code here
let finalGrade = [];
for(let i = 0; i < grades.length; i++ ){
    if ((grades[i] >= 38) && (((grades[i]/ 5) * 5) + 3 > (Math.ceil(grades[i]/ 5) * 5))) {
    finalGrade.push((Math.round(grades[i] / 5) * 5))
} else {
    finalGrade.push((grades[i]))
}
  
}    
return finalGrade;
}
