// can be used instead of a ternary operator when you have to return the variable being used in the ternary operator

const age = 18 //can be null or undefined , doesn't work with 0 or any other value where Boolean(value) might return false;
const error =  new Error("Age can not be null or undefined");  
// console.log(age === null ?error: age); instead of this 
console.log(age ?? error); // takes the right value in case age is null or undefined
