/* Objects can be thought of as a key/value storage, like a dictionary. 
If you have tabular data (data that is organized in a table with rows and columns),
you can use an object to lookup values rather than a [switch] statement or an [if/else] chain. 
This is most useful when you know that your input data is limited to a certain range.
 */
// Here is an example of a simple reverse alphabet lookup:
// This is the object:
const alpha = {
    1:"Z",
    2:"Y",
    3:"X",
    4:"W",
    24:"C",
    25:"B",
    26:"A",
    "last":"omega"
  };

// One way to retrieve the value of an objects property is using brackets.   
console.log(alpha['last'])  

// Another way is to assign a variable to a property.
let lastOne = 'last';
console.log(alpha[lastOne])

// Exercise
//Convert the switch statement into an object called lookup. 
//Use it to look up val and assign the associated string to the result variable.
// Setup
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    switch(val) {
      case "alpha":
        result = "Adams";
        break;
      case "bravo":
        result = "Boston";
        break;
      case "charlie":
        result = "Chicago";
        break;
      case "delta":
        result = "Denver";
        break;
      case "echo":
        result = "Easy";
        break;
      case "foxtrot":
        result = "Frank";
    }
  
    // Only change code above this line
    //return result;
  }
  
  //console.log(phoneticLookup("charlie"));

// Solution:
// Setup
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    //1. transform the switch to object:
    const lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank",
    };
    // What should this function do when called?
    // It should return the value of the property from the object.
    return lookup[val];

    // Only change code above this line
    //return result;
  }
  
  console.log(phoneticLookup("charlie"));  