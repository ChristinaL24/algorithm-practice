var plusOne = function (digits) {
  let digitString = '';
  for (let i = 0; i < digits.length; i++) {
    digitString += digits[i];
  }
  let bigIntNum = BigInt(digitString) + 1n;
  let answer = String(bigIntNum).split('').map((digit) => {
    return digit;
  });
  return answer;

  // method 2
  // let test = String(BigInt(digits.join('')) + 1n).split('');
  // console.log(typeof test, test);
  // return test;

};

// Create a variable to hold our string value of digits
// Create a loop that will iterate through digits array
// Add digit value at i to digitString variable
// For large test cases, use BigInt to convert our string value since JS number is limited to 64 bits
// Add 1n to our bigInt value
// Convert bigInt value back into a string and apply split method and map through it
// Return answer from function
