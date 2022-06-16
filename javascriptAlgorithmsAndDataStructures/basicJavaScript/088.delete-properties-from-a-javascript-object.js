// We can also delete properties from objects like this:
// delete ourDog.bark;
// Again you can use dot or brackets.

//Example:
const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
  };
  
// Now delete the bark property:
delete ourDog.bark;
console.log(ourDog)

// Exercise do as above.
