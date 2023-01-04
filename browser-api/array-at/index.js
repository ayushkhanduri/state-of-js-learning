// gives back the item at the index

const arr = [1,2,3,4,5];

console.log(arr.at(1));
console.log(arr.at(-2)); // works with negative numbers but works from the back of the array , starts with -1 // result: 4
console.log(arr.at(-100)); // undefined , out of range
console.log(arr.at(100)); // undefined , out of range
