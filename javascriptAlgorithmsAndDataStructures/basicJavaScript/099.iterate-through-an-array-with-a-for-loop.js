/* A common task in JavaScript is to iterate through the contents of an array. 
One way to do that is with a for loop. 
This code will output each element of the array arr to the console: */

// Example
// Uncomment to use.
/*
const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
*/

/* Remember that arrays have zero-based indexing, which means the last index of the array is length - 1. 
Our condition for this loop is i < arr.length, which stops the loop when i is equal to length. 
In this case the last iteration is i === 4 i.e. when i becomes equal to arr.length - 1 and outputs 6 
to the console. Then i increases to 5, and the loop terminates because i < arr.length is false. */

// Exercise
// Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the     myArr array to total.
// total should be declared and initialized to 0.
// total should equal 20.
// You should use a for loop to iterate through myArr.
// You should not attempt to directly assign the value 20 to total.

// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for (let i = 0; i < myArr.length; i++) {
    total += myArr[i]
}

console.log(total)

// Code Explanation

// Initialization: i gets a value of 0 and its used as a counter.
// Condition: the subsequent code is executed as long as i is lower 
// than the length of myArr (which is 5; five numbers but arrays are zero based).
// Final-expression: i is incremented by 1.
// Statement: The function adds myArr[i]'s value to total until the condition isn’t met like so:

/* 
total + myArr[0] -> 0 + 2 = 2 
total + myArr[1] -> 2 + 3 = 5
total + myArr[2] -> 5 + 4 = 9
total + myArr[3] -> 9 + 5 = 14 
total + myArr[4] -> 14 + 6 = 20 
*/
