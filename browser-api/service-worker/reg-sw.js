if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const register = await navigator.serviceWorker.register('sw.js')
      console.log(register);
    } catch(e) {
      console.log(e);
    }
  })
}

