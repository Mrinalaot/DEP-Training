// Prefill an Array
// http://www.codewars.com/kata/prefill-an-array

function prefill(n, v) {

    if (isNaN(parseInt(n)) || n < 0 || n % 1 !== 0)
        throw new TypeError(n + ' is invalid');
    else if (n === 0 || n === '0')
        return [];
    else if (n <= 1)
        return [v];
    else
        return [v].concat(prefill(n - 1, v));
    //    var arr = new Array(n);
    //    return arr.fill(v)
}