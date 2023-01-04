// only works if x is falsy

const obj = {
  name: "Ayush Khanduri",
  age: 28,
  bodyCount: 0,
  buffStat: null,
  hobbies: [], // doesn't work here
  carrer: undefined
};

function kingMaker (obj) {
  obj.bodyCount ||= 100;
  obj.buffStat ||= 100;
  obj.hobbies ||= ["reading", "working out", "music"];
  obj.carrer ||= "Programmer";
}
kingMaker(obj);
console.log(obj);

let x = null;
x ||= 100;
console.log(x);
