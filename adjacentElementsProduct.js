function solution(inputArray) {
  let final = -Infinity;
  for (let i = 0; i < inputArray.length; i++) {
    num = inputArray[i] * inputArray[i + 1];
    if (num > final) {
      final = num;
    }
  }
  return final;
}

// create a loop to iterate over our parameter
// multiply the element from index i and i + 1 together
// if the product value of the current value(num) is greater than the final value, set the value of current value to final variable
// return final variable from function
