import { retPromise } from '../shared/utils.js';

// no need to use async and wrap it in a function
// eg (async () => 
// { 
//    await retPromise(1000, false)
// })();
console.log("waiting");
await retPromise(1000, false);
console.log("done");


