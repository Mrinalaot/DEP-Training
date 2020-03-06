// Get the Middle Character
// http://www.codewars.com/kata/get-the-middle-character

function getMiddle(inputStr) {
    var len = inputStr.length;
    if (len % 2 === 0) {
        return inputStr.substr((len / 2) - 1, 2);
    } else {
        return inputStr.charAt(len / 2);
    }
}