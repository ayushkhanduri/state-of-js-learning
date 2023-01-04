const retPromise = (timer=0, shouldReject = false) => {
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

module.exports = {
  retPromise
};

