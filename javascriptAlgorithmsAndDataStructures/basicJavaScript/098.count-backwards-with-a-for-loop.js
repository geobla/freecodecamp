/* A for loop can also count backwards, so long as we can define the right conditions.
In order to decrement by two each iteration, we'll need to change our initialization, 
condition, and final expression. */

// We'll start at i = 10 and loop while i > 0. We'll decrement i by 2 each loop with i -= 2.
// Example
// Uncomment to use

/* 
const ourArray = [];

for (let i = 10; i > 0; i-= 2) {
    ourArray.push(i)
}

console.log(ourArray) 
*/

// Exercise
// Push the odd numbers from 9 through 1 to myArray using a for loop
// You should be using the array method push.
// myArray should equal [9, 7, 5, 3, 1].
let myArray = [];

for (let i = 9; i > 0; i -= 2) {
    myArray.push(i)
}

console.log(myArray)