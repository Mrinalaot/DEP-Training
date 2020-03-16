// Prefill an Array
// http://www.codewars.com/kata/prefill-an-array

function prefill(n, v) {

    let filledArray = [];
    if (isNaN(parseInt(n)) || n < 0 || n % 1 !== 0) {
        throw new TypeError(n + ' is invalid');
    } else if (n === 0 || n === '0') {
        filledArray = [];
    } else {
        filledArray = new Array(n).fill(v);
    }
    return filledArray;
}