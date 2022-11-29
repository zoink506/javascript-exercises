const convertToCelsius = function(temp) {
  let celcius = Math.round( ((temp - 32) / 1.8) * 10 ) / 10;
  return celcius;
};

const convertToFahrenheit = function(temp) {
  let fahrenheit = Math.round( ((temp *1.8) + 32) * 10 ) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
