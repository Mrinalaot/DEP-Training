//Transportation on vacation 
// http://www.codewars.com/kata/transportation-on-vacation


function rentalCarCost(days) {
    var total = days * 40;
    return days >= 7 ? total - 50 : (days >= 3 ? total - 20 : total);
}