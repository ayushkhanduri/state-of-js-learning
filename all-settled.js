const retPromise = (timer, shouldReject = false) => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject("Rejected");
      } else {
        resolve("Resolved");
      }
    }, timer);
  });
}

(async () => {
  const p1 = retPromise(1000, true);
  const p2 = retPromise(2000);
  const p3 = retPromise(3000);
  const promises = [p1, p2, p3];
  try {
    const response= await Promise.allSettled(promises); // will never reject and resolve all the arrays
    // const response = await Promise.all(promises); // will reject as soon as the promise
    console.log(response);
  } catch (e) {
    console.log(e);
  }
}) ();
