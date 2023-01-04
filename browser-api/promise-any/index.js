const { retPromise } = require('../shared/utils');

( async ( ) => {
  const p1 = retPromise(1000, true);
  const p2 = retPromise(2000, true);
  const p3 = retPromise(2000, true);
  const response= await Promise.any([p1,p2,p3])
  console.log(response);
})();
