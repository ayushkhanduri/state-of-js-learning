

const Publisher = ( () => {
  // private variables;
  let publisher, subscribers = {};

  class Pub {
    constructor() {
      if (publisher) {
        throw new Error("Can not create a new instance");
      }
      publisher = this;
    }
    subscribe(key,obj, callback) {
      callback = callback || this.valueChanged;
      const newProxy = new Proxy(obj, {
        set(target, p, newValue, receiver) {
          try {
            const response = callback(p, newValue);
            if (!response)
              throw new Error("Valdation failed") ; 
            target[p] = newValue;
          } catch (e) {
            console.log(e);
          } finally {
            return true;
          }
        }
      });
      console.log(newProxy);
      if (subscribers[key]) {
        throw new Error("Key already exists");
      }
      subscribers[key] = newProxy ;
    }

    valueChanged(key, newValue) {
      console.log(`Value changed : ${key} , new value: ${newValue}`);
      return true;
    }

    changeValue(key, changedValues = {}) {
      const subscriber = subscribers[key];
      if (!subscriber) {
        throw new Error("Subscriber doesn't exists");
      }
      for (const changedKey in changedValues) {
        subscriber[changedKey] = changedValues[changedKey];
      }
    }
  }
  return Pub;

})()

const objWatcher = (key, newValue) => {
  switch (key) {
    case 'name': return newValue.length < 20;
    case 'age': return newValue> 18;
    default: {
      return true;
    }
  }
}

const obj = {
  name:"Ayush",
  age: 28
};

const publisher = new Publisher();
publisher.subscribe("ayush", obj, objWatcher);
publisher.changeValue("ayush", {name: "balle balle", age:44})
