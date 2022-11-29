const palindromes = function (str) {
  let isPalindrome = false;
  const regex = /[!"#$%&'()/\s*+,-./:;<=>?@[\]^_`{|}~]/g;
  let cleanStr = str.replace(regex, ""); // string no longer has any punctuation
  cleanStr = cleanStr.toLowerCase();

  // Loop through 
  let newStr = "";
  for(let i = cleanStr.length - 1; i >= 0; i--) {
    newStr += cleanStr.charAt(i);
  }
  console.log(`newStr: ${newStr}`);
  console.log(`cleanStr: ${cleanStr}`);

  if(cleanStr === newStr) isPalindrome = true;
  else isPalindrome = false;
  return isPalindrome;
}

// Do not edit below this line
module.exports = palindromes;
