const { retPromise } = require('../shared/utils');

(async () => {
  const p1 = retPromise(1000, true);
  const p2 = retPromise(2000);
  const p3 = retPromise(3000);
  const promises = [p1, p2, p3];
  try {
    const response= await Promise.allSettled(promises); // will never reject and resolve all the promises in the array
    // const response = await Promise.all(promises); // will reject as soon as the promise
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}) ();
