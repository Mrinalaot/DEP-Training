// Word Count
// http://www.codewars.com/kata/word-count


function countWords(str) {
//return str.trim().split(/\s+/).length;

// ******** Could you please explain why this is not passing all test cases ************
//   if(str.localeCompare("")===0 || str.localeCompare(" ")===0)
//     return 0;
//   var chararr = str.trim().split(" ");
//   var c=0;
//   for(i=0;i<chararr.length;i++)
//   {
//     if(chararr[i].lenth!==0)
//       c++
//   }
//   return c;


// using regex it works fine
var pattern = /[\w\d\'\'-]+/ig
var matches = str.match(pattern);
console.log(matches);
return matches ? matches.length : 0;
 
}