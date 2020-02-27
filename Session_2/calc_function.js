// Calculating with Functions
// http://www.codewars.com/kata/calculating-with-functions

function zero() {
    return arguments.length ? arguments[0](0) : 0;
}

function one() {
    return arguments.length ? arguments[0](1) : 1;
}

function two() {
    return arguments.length ? arguments[0](2) : 2;
}

function three() {
    return arguments.length ? arguments[0](3) : 3;
}

function four() {
    return arguments.length ? arguments[0](4) : 4;
}

function five() {
    return arguments.length ? arguments[0](5) : 5;
}

function six() {
    return arguments.length ? arguments[0](6) : 6;
}

function seven() {
    return arguments.length ? arguments[0](7) : 7;
}

function eight() {
    return arguments.length ? arguments[0](8) : 8;
}

function nine() {
    return arguments.length ? arguments[0](9) : 9;
}

function plus() {
    var right = arguments[0];
    return function(left) { return left + right; }
}

function minus() {
    var right = arguments[0];
    return function(left) { return left - right; }
}

function times() {
    var right = arguments[0];
    return function(left) { return left * right; }
}

function dividedBy() {
    var right = arguments[0];
    return function(left) { return Math.floor(left / right); }
}