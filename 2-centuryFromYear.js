// Returns century that a given year is in. (1901-2000 = 19th century)
function centuryFromYear(year) {

        if(year % 100 === 0){
           let answer = (year / 100);
           return (answer)
        }
        else {
           let roundedAnswer = (year/100) + 1;
           return Math.floor(roundedAnswer);
        }
   
}
