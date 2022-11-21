const reverseString = function(str) {
  let newString = "";
  for(let i = str.length; i >= 0; i--) {
    newString = newString.concat(str.charAt(i));
  }

  return newString;
};

// Do not edit below this line
module.exports = reverseString;
