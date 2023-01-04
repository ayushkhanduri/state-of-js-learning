// copied the entire example from the dev mozilla cause i can't write reg ex for shit
// The matchAll() method returns an iterator of all results matching a string against a regular expression, including capturing groups.
// capturing groups -> some more advanced regex with extra submatch information

const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// expected output: Array ["test2", "e", "st2", "2"]
