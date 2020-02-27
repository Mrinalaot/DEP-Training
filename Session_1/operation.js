//Basic Mathematical Operations
// http://www.codewars.com/kata/basic-mathematical-operations

function basicOp(operation, value1, value2) {
    var result = 0;
    switch (operation) {
        case '+':
            result = value1 + value2;
            break;
        case '-':
            result = value1 - value2;
            break;
        case '*':
            result = value1 * value2;
            break;
        case '/':
            result = value1 / value2;
            break;
        default:
            result = "Wrong Choice";
    }
    return result;
}