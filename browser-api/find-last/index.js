// just searches for the item which matches the condition from the back and returns the item
const arr = [
  {
    name: "A",
    age: 16
  },
  {
    name: "B",
    age: 12
  },
  {
    name: "C",
    age: 40
  },{
    name: "D",
    age: 32
  },{
    name: "E",
    age: 18
  },{
    name: "F",
    age: 12
  },
];

const lastVotingEligibleCandidate = arr.findLast((item, index) => {
  console.log(item, index); // loop runs reverse;
  return item.age >=18
});
console.log(lastVotingEligibleCandidate);
