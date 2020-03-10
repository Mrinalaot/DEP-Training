// Function composition
// http://www.codewars.com/kata/function-composition-1

function compose(...args) {

    return function(a) {
        let result = a;
        for (let i = args.length - 1; i >= 0; i--) {
            const fun = args[i];
            result = fun(result)
        }
        return res;
    }
}