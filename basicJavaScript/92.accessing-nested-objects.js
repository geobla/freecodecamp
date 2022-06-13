// The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

// Here is a nested object:
const ourStorage = {
    "desk": {
      "drawer": "stapler"
    },

    "cabinet": {
      "top drawer": { 
        "folder1": "a file",
        "folder2": "secrets"
      },
      "bottom drawer": "soda"
    }
  };

// ourStorage.cabinet["top drawer"].folder2 would be the string secrets
console.log(ourStorage.cabinet['top drawer'].folder2)

// Exercise:
/* Access the myStorage object and assign the contents 
of the glove box property to the gloveBoxContents variable. 
Use dot notation for all properties where possible, otherwise use bracket notation. */
// gloveBoxContents should equal the string maps.
const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  const gloveBoxContents = myStorage.car.inside['glove box'];
  console.log(gloveBoxContents)