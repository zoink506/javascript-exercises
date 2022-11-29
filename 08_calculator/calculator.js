const add = function(value1, value2) {
	// takes two arguments, adds them
  return value1 + value2;
};

const subtract = function(value1, value2) {
	// takes two arguments, subtracts them
  return value1 - value2;
};

const sum = function(values) {
  // takes an array, adds all the values in array
  let sum = 0;
  values.forEach(value => {
    sum += value;
  });
  return sum;
};

const multiply = function(values) {
  // takes an array, multiplies all values left to right | arr[0] * arr[1] * arr[2] etc.
  let total = values[0];
  for(let i = 1; i < values.length; i++) {
    total = total * values[i];
  }

  return total;
};

const power = function(value, power) {
  // takes 2 arguments, 1st argument to the power of 2nd argument
  let total = value;
  for(let i = 1; i < power; i++) {
    total *= value;
  }
  return total;
};

const factorial = function(value) {
	// takes 1 argument, finds factorial: factorial(4) = 4 * 3 * 2 * 1 ... 
  let total;
  if(value === 0) {
    total = 1;
  } else {
    total = value;
    for(let i = value-1; i > 1; i--) {
      total *= i;
    }
  }
  
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
