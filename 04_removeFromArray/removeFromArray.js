const removeFromArray = function(arr) {
  let i = 1;
  while(i < arguments.length) { // Loop through arguments

    let j = 0;
    while(j < arr.length) {
      if(arr[j] === arguments[i]) {
        arr.splice(j, 1);
      } else {
        j++;
      }
    }

    i++;
  }

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
