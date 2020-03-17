// Array Helpers
// http://www.codewars.com/kata/array-helpers

Array.prototype.square = function() {
    return this.map(function(x) {
        return (x * x);
    });
}
Array.prototype.cube = function() {
    return this.map(function(x) {
        return (x * x * x);
    });
}
Array.prototype.sum = function() {
    return this.reduce(function(s, v) {
        return s + v;
    }, 0);
}
Array.prototype.average = function() {
    return this.reduce(function(s, v) {
        return (s + v);
    }, 0) / this.length;
}

Array.prototype.even = function() {
    return this.filter(function(x) {
        return x % 2 === 0;
    });
}

Array.prototype.odd = function() {
    return this.filter(function(x) {
        return x % 2 !== 0;
    });
}