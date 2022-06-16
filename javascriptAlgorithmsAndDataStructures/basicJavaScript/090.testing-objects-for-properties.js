/* Sometimes it is useful to check if the property of a given object exists or not. 
We can use the .hasOwnProperty(propName) method of objects to determine if 
that object has the given property name. 
.hasOwnProperty() returns true or false if the property is found or not. */

//Example
const myObj = {
    top: "hat",
    bottom: "pants"
  };
  
  console.log(myObj.hasOwnProperty("top"));
  console.log(myObj.hasOwnProperty("middle"));
  
// Exercise:
/* Modify the function checkObj to test if an object passed to the function (obj) 
contains a specific property (checkProp). If the property is found, 
return that property's value. If not, return "Not Found".   */

function checkObj(obj, checkProp) {
    // Only change code below this line
    return "Change Me!";
    // Only change code above this line
  }

// Solution:
function checkObj(obj, checkProp) {
    // Only change code below this line
    if(obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    }else {
        return "Not Found";
    }
    
    // Only change code above this line
  }  
  console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"))