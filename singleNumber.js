var singleNumber = function (nums) {
  let tally = {}; // occurences {4: 1, 1: 2, 2: 2}
  for (const num of nums) {
    tally[num] = tally[num] + 1 || 1;
  }
  for (const property in tally) {
    if (tally[property] === 1) {
      return property;
    }
  }
};

// create an object that will tally up the amount of each value that appears
// use a for of loop to keep track
// if tally exist, add one to it; if it does not, set it equal to one
// use a for in loop to iterate through our object and return the key value that equals 1
