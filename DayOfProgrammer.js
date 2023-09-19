function dayOfProgrammer(year) {
    // Write your code here
   if (year === 1918) return `26.09.${year}`
    
    let leap = year % 4 == 0 // jul
    
    if (year > 1918) leap = year % 400 == 0 || (leap && (year % 100 != 0))
    
    return `${leap ? '12' : '13'}.09.${year}`

}
