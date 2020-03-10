//A function within a function
// http://www.codewars.com/kata/a-function-within-a-function

function always(func) {
    return () => func;
}