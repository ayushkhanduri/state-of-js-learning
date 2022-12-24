
setTimeout(async () => {
  const { subtractNumbers } = await import('./dynamic-module.js');
  console.log(subtractNumbers(420,351));
}, 1000);
