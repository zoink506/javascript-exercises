const fibonacci = function(numInSeq) {
  if(typeof numInSeq === "number") {
    return getFibonacciValue(numInSeq);
  } else if(typeof numInSeq === "string" && /^[0-9]+$/.test(numInSeq)) { // Checks if it is a number in a string
    //console.log("It is a string and a number in a string");
    // convert it to a number
    
    const number = convertStr(numInSeq);
    console.log(number);
    return getFibonacciValue(number);

  }
};

function getFibonacciValue(numInSeq) {
  if(numInSeq > 0) {
    let fiboSeq = [0, 1]; // sequence
    for(let i = 2; i < numInSeq + 1; i++) {
      const nextVal = fiboSeq[i-1] + fiboSeq[i-2];
      fiboSeq.push(nextVal);
    }
    //console.log(fiboSeq);
    return fiboSeq[fiboSeq.length - 1];
  } else {
    return "OOPS";
  }
}

function convertStr(str) {
  let arr = reverseArray(str.split("")); // ["5", "1"]

  for(let i = 0; i < arr.length; i++) { // [5, 1] turns "strings" into number values
    arr[i] = arr[i].charCodeAt(0) - 48; // unicode value for 0 is 48, through to 9 which is 57
  }

  /* 
   * multiply value by its column (starting at units column) 
   * "150"
   * 
   * [0, 5, 1]
   * 0 * m = 0, where m = 1
   * m * 10 = 10
   * 
   * [0, 5, 1]
   * 5 * m = 50, where m = 10
   * m * 10 = 100
   * 
   * [0, 50, 1]
   * 1 * m = 100, where m = 100
   * m * 10 = 1000
   * 
   * [0, 50, 100]
   * Added up, total = 150.
   * getFibonacciValue(150) then finds the 150th value in the fibonacci sequence (very big number)
   */
  let multiplier = 1;
  for(let i = 0; i < arr.length; i++) {
    arr[i] *= multiplier;

    multiplier *= 10;
  }

  const addedArray = sumArray(arr);
  return addedArray;
}

function sumArray(arr) {
  let total = 0;
  arr.forEach(value => {
    total += value;
  });
  return total;
}

function reverseArray(arr) {
  newArr = [];
  for(let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  return newArr;
}

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ...

// Do not edit below this line
module.exports = fibonacci;
