const findTheOldest = function(arr) {
  // Return the oldest person
  let oldestAge = 0;
  let oldestPerson;
  const today = new Date();
  const year = today.getFullYear();

  arr.forEach(person => {
    let age;
    if(person.hasOwnProperty('yearOfDeath')) {
      age = person.yearOfDeath - person.yearOfBirth;
    } else {
      age = year - person.yearOfBirth;
    }

    if(age > oldestAge) {
      oldestAge = age;
      oldestPerson = person;
    }

  });

  console.log(oldestPerson);
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
