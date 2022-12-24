const obj = {
  name: {
    value: "Ayush",
    validations: [
      {
        type:"maxlength",
        breakpoint: 20,
        errorMsg: "Can not be more than 20"
      },
      {
        type: "minlength",
        breakpoint: 0,
        errorMsg: "Can not be empty"
      },
      {
        type: "async-timeout",
        breakpoint: 3000,
        errorMsg: "Server Error"
      }
    ]
  },
  age: {
    value: 24,
    validations: [
      {
        type: "!null",
        errorMsg: "can not be null"
      },
      {
        type: "greaterThan18",
        errorMsg: "User is less than 18"
      }
    ]
  }
}

const validations = (newValue , validation) => {
  let validationFailed = false;
  switch(validation.type) {
    case "maxlength": {
      validationFailed = validation.breakpoint < newValue.length;
      break;
    }
    case "minlength": {
      validationFailed = !Boolean(newValue);
      break;
    }
  }
  return validationFailed ? validation.errorMsg : null;
}
const checkValdations = (keyValidations, newValue) => {
  return keyValidations.reduce((errors,validation) => {
    const error = validations(newValue, validation);
    if (error) {
      errors.push(error);
    }
    return errors;
  }, [])
}

const proxy = new Proxy(obj.name, {
  set(target, p, newValue, receiver) {
    try {
      const errors = checkValdations(target.validations, newValue);
      console.log(errors);
      if (!errors.length)
        target[p] = newValue;
      else {
        throw new Error(errors);
      }
    } catch (errors) {
      console.log(errors);
    } finally {
      return true;
    }
  }
});

proxy.value = "Ayush khanduri balleeeeeeeee";

console.log(proxy.value);
