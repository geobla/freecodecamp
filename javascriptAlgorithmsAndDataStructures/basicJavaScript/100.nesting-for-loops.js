/* If you have a multi-dimensional array, you can use the same logic 
as the prior waypoint to loop through both the array and any sub-arrays.  */

// Here is an example:
// Example
// Uncomment to use
/*
const arr = [
    [1, 2], [3, 4], [5, 6]
  ];
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }

console.log(arr[1][0])
*/

// Exercise
// Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.
// multiplyAll([[1], [2], [3]]) should return 6.
// multiplyAll([[1, 2], [3, 4], [5, 6, 7]]) should return 5040.
// multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]) should return 54.

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }        
}
    // Only change code above this line
    return product;
  }
  
  console.log(multiplyAll([[1], [2], [3]]))
  console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));
  console.log(multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]));
