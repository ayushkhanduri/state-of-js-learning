// exactly like replace , it just replaces all the occurrences of the patter
const string = "'Be like water my friend , be like water' as he drank the water from the water mug";
console.log(string.replaceAll('water', 'piss')); // replaces all the matching patterns
console.log(string.replaceAll(/water/ig, 'piss')); // for regex needs to be called with a global flag or it crashes
console.log(string); // doesn't change the original string
