function getDayNumber(janFirstDayNumber, yearDayNumber) {
   return (janFirstDayNumber + (yearDayNumber-1))%7;
}//getDayNumber

console.log(getDayNumber(5,39)); //Qué día es el primero del año y en qué año voy
