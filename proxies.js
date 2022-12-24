const obj = {
  name: "ayush", 
  age: 28
};

Object.defineProperty(String.prototype, 'capitalize', {
  value: function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false
})


const proxy = new Proxy(obj,{
  get(target, prop, receiver) {
    console.log("Proxied", target);
    if (typeof target[prop] === 'string'){
      return target[prop].capitalize();
    }
    return target[prop];
  }
});

console.log(proxy.name);
console.log(proxy.age);
