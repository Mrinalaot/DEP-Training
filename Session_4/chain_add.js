// A Chain adding function
// http://www.codewars.com/kata/a-chain-adding-function

function add(n1) {
    var innerAdd = n2 => add(n1 + n2);
    innerAdd.toString = () => n1;
    return innerAdd;
}