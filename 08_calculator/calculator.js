const add = function(nb1, nb2) {
  return nb1 + nb2
};

const subtract = function(nb1, nb2) {
	return nb1 - nb2
};

const sum = function(arr) {
  let sum = 0
  if(arr.length == 0) {
    return 0
  }
  else {
      for(let i = 0; i< arr.length; i++){
      sum += arr[i]
    }
    return sum
  }
  
};

const multiply = function(arr) {
  let sum = 1;

  for(let i = 0; i < arr.length; i++) {
    sum *= arr[i];
  }
  return sum

  // sum = arr.reduce((item, n) => item *= n)
  // return sum
}

const power = function(nb1, nb2) {
	return Math.pow(nb1, nb2);
};

const factorial = function(num) {
	if (num === 0) {
      return 1;
  }
  else {
      return num * factorial( num - 1 );
  }
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
