/* For loops don't have to iterate one at a time. 
By changing our final-expression, we can count by even numbers. */

// We'll start at i = 0 and loop while i < 10. We'll increment i by 2 each loop with i += 2.

// Example
// Uncomment to run!

/* 
const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

console.log(ourArray) 
*/

// Exercise.
// Push the odd numbers from 1 through 9 to myArray using a for loop.
// You should be using a for loop for this.
// myArray should equal [1, 3, 5, 7, 9].

// Setup
const myArray = [];

// Only change code below this line
for (let i = 1; i < 10; i +=2){
    myArray.push(i)
}

console.log(myArray)