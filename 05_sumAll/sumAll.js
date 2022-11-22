const sumAll = function(num1, num2) {
  if((num1 >= 0 && num2 >= 0) && (typeof num1 === "number" && typeof num2 === "number")) {
    let sum = 0;
    let a = 0;
    let b = 0;
    
    if(num1 <= num2) {
      a = num1;
      b = num2;
    } else {
      a = num2;
      b = num1;
    }

    while(a <= b) {
      sum += a;
      a++;
    }

    console.log(`Final sum: ${sum}`);
    return sum;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
