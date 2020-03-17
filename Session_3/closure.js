//Closures and Scopes
// http://www.codewars.com/kata/closures-and-scopes/train/javascript

function createFunctions(nunberOfFunction) {
    var callbacks = [];

    for (let iterator = 0; iterator < nunberOfFunction; iterator++) {
        callbacks.push(() => iterator);
    }
    return callbacks;
}