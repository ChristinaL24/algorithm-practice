var twoSum = function (nums, target) {

  for (let i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// create two loops to iterate through array
// check if the nums at index i and num index j add up to target value
// if it does, return i and j in an array
