//You can add new properties to existing JavaScript objects the same way you would modify them.

//Here's how we would add a bark property to ourDog:
//This is the object before adding a new property[key]:
const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };

//Now we add a new property using dot or bracket:
ourDog.bark = "woof" //dot
ourDog["bark"] = "woof"

//Check with console.log
console.log(ourDog)

//Exercise is same as above.
