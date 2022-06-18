// Replace Loops using Recursion.

/* Recursion is the concept that a function can be expressed in terms of itself. 
To help understand this, start by thinking about the following task: 
 */
// multiply the first n elements of an array to create the product of those elements. 

// Using a for loop, you could do this:
/*
function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
       product *= arr[i];
    }
    return product;
  }

  console.log(multiply([1,2,3,4,5], 5))
  */
  /* So lets say we have an array which is: arr = [1, 2, 3, 4, 5].
  Here, the n, which refers to the number of the elements in the array is 5, because we have 5 elements inside the array.
  Here we can find the left-hand side of our confusion as the function itself, which is multiply(arr, n).

  Here the product is continuously being multiplied with the elements of the arrow until the variable i becomes 5 and then it stops because it is no longer less than n but equal to n which happens to be 5, the number of the elements itself.

  So it goes to be from 0 to 4 and these are index numbers of the elements which happen to be multiplied with the product, which is 1.

  When the index is 0, then arr[0] is 1

  When the index is 1, then arr[1] is 2

  When the index is 2, then arr[2] is 3

  When the index is 3, then arr[3] is 4

  When the index is 4, then arr[4] is 5

  They all are multiplied and the result is = 1 * 2 * 3 * 4 * 5 = 120.

  So our left-hand side of the confusion has the value of 120 */

  /* Then we come to the right-hand side of our confusion.

  multiply(arr, n - 1) * arr[n - 1]

  This part has two things being multiplied

  First one is multiply(arr, n - 1) which is just the same thing except you have to take 
  one element less than the last time. Think of the same function where only number of elements 
  which is n, is 1 element less this time. So n is 4 now.

So now it comes to this:

When the index is 0, then arr[0] is 1

When the index is 1, then arr[1] is 2

When the index is 2, then arr[2] is 3

When the index is 3, then arr[3] is 4

So for the first multiply(arr, n - 1) part they all are multiplied and the result is = 1 * 2 * 3 * 4 = 24.

Then comes the next part which is arr[n - 1]

Here, we are only getting the n-1th index of our array, we know n is 5 and therefore n-1 will 4. 
As we know indexing starts from zero, so the 4th index will be the 5th item in the arrow, which is 5.

This means arr[n - 1] is 5.

NOW, lets multiply the two parts:

We have:

multiply(arr, n - 1) = 24 And, arr[n - 1] = 5

5 * 24 = 120, the same result we had from the left-hand side of our confusion. */

/*
  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
  
  console.log(multiply([1,2,3,4,5], 5))
*/

// Exercise
// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.
// sum([1], 0) should equal 0.
// sum([2, 3, 4], 1) should equal 2.
// sum([2, 3, 4, 5], 3) should equal 9.
// Your code should not rely on any kind of loops (for or while or higher order functions such as forEach, map, filter, or reduce.).
// You should use recursion to solve this problem.

function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
      return 0;
    }else {
      return sum(arr, n-1) + arr[n-1]
    }
    // Only change code above this line
  }
  
  console.log(sum([1],0))
  console.log(sum([2,3,4],1))
  console.log(sum([2,3,4,5],3))