/* Another use of bracket notation on objects is to access a property[key] which is stored 
as the value of a variable. This can be very useful for iterating through an object's 
properties or when accessing a lookup table. */

// Here is an example of using a variable to access a property:

// This is the object:
const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
  };
  
  /* If we want to use a property[key] from inside an object,
  we must put it inside quotes, because it is not declared outside of it.
  Else we get an error. */
  const myDog = "Hunter";  // Retrieve a property from the object and asign it.
  const myBreed = dogs[myDog]; // Use the Value of the property retrieved.
  console.log(myBreed);
  
  /* Another way you can use this concept is when the property's name 
  is collected dynamically during the program execution, as follows:  
   */
  // This is an object: (Modified by me, for better understanding.)
  const players = {
    userName: "John"
  };
  
  /* Create a function and inside ask to return the property[key] of the object when called. */ 
  function findUser() {
    return "userName";    
  }
  
  // Now call the function using the object name followed by the function in brackets.
  console.log(players[findUser()])

  // Exercise.
  // Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  const playerNumber = 16;  // Change this line
  const player = testObj[playerNumber];   // Change this line
  
  