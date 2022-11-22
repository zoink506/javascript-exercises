const leapYears = function(year) {
  if(typeof year === "number") {
    if( !(year % 4) && ((year % 100 != 0) || !(year % 400)) ) {
      return true;
    } else {
      return false;
    }
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = leapYears;
