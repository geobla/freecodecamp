/* As we have seen in earlier examples, objects can contain 
both nested objects and nested arrays. 
Similar to accessing nested objects, array bracket notation 
can be chained to access nested arrays.
 */
// Here is an example of how to access a nested array:
const ourPets = [
    {
      animalType: "cat",
      names: [
        "Meowzer",
        "Fluffy",
        "Kit-Cat"
      ]
    },
    {
      animalType: "dog",
      names: [
        "Spot",
        "Bowser",
        "Frankie"
      ]
    }
  ];

// ourPets[0].names[1] would be the string Fluffy
console.log(ourPets[0].names[1])

// Exercise.
// secondTree should equal the string pine.
const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  const secondTree = myPlants[1].list[1];
  console.log(secondTree)