const repeatString = function(str, num) {
  let completeStr = "";

  if(num >= 0) {
    for(let i = 0; i < num; i++) {
      completeStr = completeStr + str;
    }
  } else {
    completeStr = "ERROR";
  }

  return completeStr;
};

// Do not edit below this line
module.exports = repeatString;
