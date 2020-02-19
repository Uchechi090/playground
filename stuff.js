// var counter = function(arr) {
//     return "There are " + arr.length + " elements in this array";
// };

module.exports.counter = function(arr) {
  //another to export modules(2nd way) - module patterns
  return "There are " + arr.length + " elements in this array";
};

//console.log(counter(["shaun", "crystal", "ryu"]));

// var adder = function(a,b) {
//     return `The sum of the two numbers is ${a+b}`;
// };

module.exports.adder = function(a, b) {
  return `The sum of the two numbers is ${a + b}`;
};

//var pi = 3.142;

module.exports.pi = 3.142;

//(1st way) - module patterns
// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

//(3rd way) - module patterns
// module.exports = {
//     counter: counter,
//     adder: adder,
//     pi: pi
// }
