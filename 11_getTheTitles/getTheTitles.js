const getTheTitles = function(arr) {
  let bookArray = [];
  arr.forEach(book => {
    bookArray.push(book.title);
  });
  return bookArray;
};

// Do not edit below this line
module.exports = getTheTitles;
