var containsDuplicate = function (nums) {
  let storage = [];
  for (let i = 0; i < nums.length; i++) {
    if (!storage.includes(nums[i])) {
      storage.push(nums[i]);
    } else {
      return true;
    }
  }
  return false;
};



// create a storage to hold values in array
// loop through array
// if value does not exist in our storage array, add it to storage. if it does exist, return true
    // use includes method to check if a value exist within the storage
// return false from the function
