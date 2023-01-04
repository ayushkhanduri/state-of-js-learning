// to search for keys in an Object, replace for hasOwnProperty

const obj = {
  name : "abc",
  age: 28,
  address : {
    street: "street 1",
    building: "b1",
    pin: "560066",
    city: "Bengaluru"
  }
};

Object.defineProperty(obj, 'trait', {
  value: 'beta',
  enumerable: false,
  writable: true
}); // defining a hidden property

obj.trait = 'sigma';

console.log(obj);

console.log(Object.hasOwn(obj,'name'));
console.log(Object.hasOwn(obj,'street')); // doesn't work in nested
console.log(Object.hasOwn(obj.address,'street'));
console.log(Object.hasOwn(obj, 'trait')); // works with hidden keys
console.log(obj.trait)
