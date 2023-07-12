function businessHours(dayNumber, hourNumber){
    if ( (dayNumber>=1) && (dayNumber<=5) && (hourNumber>=9) && (hourNumber<=18)) {
      return true;
    } else {
      return false;
    }
  }
   //businessHours


function getDayNumber(janFirstDayNumber, yearDayNumber) {
    return (janFirstDayNumber + (yearDayNumber-1))%7;
 }//getDayNumber
 
 console.log(getDayNumber(5,39)); //Qué día es el primero del año y en qué año voy

function part3(yearDayNumber, hourNumber){
  let day = getDayNumber (0, yearDayNumber);
  return businessHours(day,hourNumber);
}//part3

console.log(part3(72,17));
