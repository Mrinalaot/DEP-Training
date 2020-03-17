// http://www.codewars.com/kata/function-composition
// Function Composition

function compose(f, g) {
    let v = (...values) => f(g(...values));
    return v;
}