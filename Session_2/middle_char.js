// Get the Middle Character
// http://www.codewars.com/kata/get-the-middle-character

function getMiddle(s)
{
  //Code goes here!
  var len = s.length;
  if(len%2===0){
    return s.substr( (len/2)-1 ,2);
  }
  
  else{
    return s.charAt(len/2);
  }
}