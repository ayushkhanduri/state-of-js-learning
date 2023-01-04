const { retPromise } = require('../shared/utils');

( async ( ) => {
  // resolves if any of the promise gets resolved , if all the 3 promises fail, return AggregatorError
  const p1 = retPromise(1000, true);
  const p2 = retPromise(1000, true);
  const p3 = retPromise(1000, true);
  try {
    const response= await Promise.any([p1,p2,p3])
    console.log("response : ", response);
    // throws AggregatorError -> which is basically array of errors
  } catch (e) {
    console.log(e)
  }
})();
