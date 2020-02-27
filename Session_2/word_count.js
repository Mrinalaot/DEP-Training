// Word Count
// http://www.codewars.com/kata/word-count


function countWords(str) {

    var pattern = /[\w\d\'\'-]+/ig
    var matches = str.match(pattern);
    console.log(matches);
    return matches ? matches.length : 0;

}