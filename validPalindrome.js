var isPalindrome = function (s) {
  // first method (this one had a quicker run time)
  let input = s.toLowerCase().replace(/[^a-z0-9]/gi, "").trim();
  return input === input.split("").reverse("").join("");
};

// convert the string to lower case
// remove all white spaces and non-alphanumeric characters
// save this new value in a variable
// create a new storage that will hold our reversed string
// create a loop that will iterate through the param and add it to new storage
// compare both values and return boolean true if it is a palindrome

// second method
// var reversedStr = "";
//     for (let i = input.length - 1; i >= 0; i--) {
//         reversedStr += input[i];
//     }
//     if (input === reversedStr) {
//         return true;
//     } else {
//         return false;
//     }
