// Function Cache
// http://www.codewars.com/kata/a-chain-adding-function

function cache(func) {
    var memory = {};
    return function() {
        var key = JSON.stringify(arguments);
        if (key in memory) return memory[key];
        return memory[key] = func.apply(this, arguments);
    };
}