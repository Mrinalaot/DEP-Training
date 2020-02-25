//Transportation on vacation 
// http://www.codewars.com/kata/transportation-on-vacation


function rentalCarCost(d) {
  var total = d*40;
  return d>=7 ? total-50 : (d>=3) ? total -20 : total;
}