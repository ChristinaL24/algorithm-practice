
// convert our param into a string
// create storage that will hold an empty string value; this will hold our reversed param value
// use a fot loop to iterate through reversedX backwards
// add the values to our compare storage
// Convert the string value from our compare variable to a number and compare to param x
// return

var isPalindrome = function (x) {
  let reversedX = x.toString();
  let compare = '';
  for (let i = reversedX.length - 1; i >= 0; i--) {
    compare += reversedX[i];
  }
  return (Number(compare) === x);
};

// method 2
 // let reversed = x.toString().split('').reverse().join('');
 //    if (Number(reversed) === x) {
 //        return true;
 //    } else {
 //        return false;
 //    }

// method 3 using for of loops
// let reversedX = x.toString();
//     let compare = '';
//     for (let i of reversedX) {
//         compare = i + compare;
//     }
//     return (compare === reversedX);
